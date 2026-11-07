import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { runInNewContext } from "node:vm";
import { transformFileSync } from "@babel/core";
import ts from "typescript";

// Exercises the real hook and component; native gesture arbitration still needs devices.
function createHarness(options = {}) {
  const pans = [];
  let offset;
  let native;
  const instance = { scrollTo() {}, scrollToIndex() {}, scrollToOffset() {} };
  const animatedRef = Object.assign(() => {}, { current: instance });
  const forwardedRef = { current: null };
  const mocks = {
    react: {
      memo: (component) => component,
      forwardRef: (render) => render,
      useMemo: (factory) => factory(),
      useImperativeHandle: (ref, factory) => {
        if (typeof ref === "function") ref(factory());
        else if (ref) ref.current = factory();
      },
    },
    "react/jsx-runtime": { jsx: (type, props) => ({ type, props }) },
    "react-native": {
      FlatList: "FlatList",
      StyleSheet: { create: (styles) => styles },
    },
    "react-native-reanimated": {
      __esModule: true,
      default: { ScrollView: "Animated.ScrollView" },
      useAnimatedRef: () => animatedRef,
      useSharedValue: (value) => ({
        value,
        set(next) {
          this.value = next;
        },
      }),
      useScrollOffset: (_ref, provided) => {
        offset = provided;
      },
    },
    "react-native-gesture-handler": {
      GestureDetector: "GestureDetector",
      usePanGesture: (config) => {
        pans.push(config);
        return config;
      },
      useNativeGesture: () => (native = {}),
      useExclusiveGestures: (...gestures) => ({ gestures }),
      GestureStateManager: {
        fail: (handlerTag) => {
          assert.equal(handlerTag, 23);
          manager.fail();
        },
        activate: (handlerTag) => {
          assert.equal(handlerTag, 23);
          manager.activate();
        },
      },
    },
    "../constants/flyout-gesture.constants": { FlyoutScrollDragThreshold: 8 },
    "./use-flyout-drag-context.hook": {
      useFlyoutDragContext: () => ({
        placement: options.placement ?? "bottom",
        dragGestureConfig: {
          enabled: true,
          onActivate() {},
          onUpdate() {},
          onDeactivate() {},
        },
      }),
    },
    "@impulse-ui-native/theme": {
      useThemedStyles: (factory) =>
        factory({ components: { flyout: { contentPaddingHorizontal: 16 } } }),
    },
  };
  function load(relative) {
    const source = readFileSync(new URL(relative, import.meta.url), "utf8");
    const compiled = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        jsx: ts.JsxEmit.ReactJSX,
      },
    }).outputText;
    const exports = {};
    runInNewContext(compiled, {
      exports,
      require: (name) => {
        assert.ok(name in mocks, `Unexpected import: ${name}`);
        return mocks[name];
      },
    });
    return exports;
  }
  const hooks = load(
    "../packages/flyout/src/hooks/use-flyout-scroll-gesture.hook.ts",
  );
  mocks["../hooks"] = hooks;
  const component = load(
    options.flatList
      ? "../packages/flyout/src/components/flat-list.tsx"
      : "../packages/flyout/src/components/scroll-view.tsx",
  );
  const render = options.flatList
    ? component.FlyoutFlatList
    : component.FlyoutScrollView;
  const view = render(options.props ?? {}, forwardedRef);
  const pan = pans[0];
  let state = "waiting";
  const manager = {
    fail: () => {
      state = "failed";
    },
    activate: () => {
      state = "active";
    },
  };
  function touch(x, y, numberOfTouches = 1) {
    return {
      handlerTag: 23,
      allTouches: [{ absoluteX: x, absoluteY: y }],
      numberOfTouches,
    };
  }
  return {
    view,
    instance,
    forwardedRef,
    native,
    pan,
    get state() {
      return state;
    },
    scroll(y) {
      offset.value = y;
    },
    down(x = 100, y = 200, fingers = 1) {
      state = "waiting";
      pan.onTouchesDown(touch(x, y, fingers));
    },
    move(dx, dy, fingers = 1) {
      if (state !== "failed")
        pan.onTouchesMove(touch(100 + dx, 200 + dy, fingers));
    },
  };
}

test("a downward swipe starting at the top activates the sheet before native scrolling", () => {
  const h = createHarness();
  assert.equal(h.pan.manualActivation, true);
  assert.equal(typeof h.pan.onActivate, "function");
  assert.equal(typeof h.pan.onUpdate, "function");
  assert.equal(typeof h.pan.onDeactivate, "function");
  assert.equal(h.view.props.gesture.gestures[0], h.pan);
  assert.equal(h.view.props.gesture.gestures[1], h.native);
  h.down();
  h.move(1, 3);
  assert.equal(h.state, "waiting");
  h.move(1, 12);
  assert.equal(h.state, "active");
  h.move(1, -20);
  assert.equal(h.state, "active");
});

test("a swipe begun below the top stays with scrolling even after reaching the top", () => {
  const h = createHarness();
  h.scroll(120);
  h.down();
  assert.equal(h.state, "failed");
  h.scroll(0);
  h.move(0, 40);
  assert.equal(h.state, "failed");
  h.down();
  h.move(0, 12);
  assert.equal(h.state, "active");
});

test("upward and horizontal swipes at the top stay with the ScrollView", () => {
  for (const [dx, dy] of [
    [0, -12],
    [20, 5],
    [-20, 5],
  ]) {
    const h = createHarness();
    h.down();
    h.move(dx, dy);
    assert.equal(h.state, "failed");
  }
});

test("explicit initial offsets, insets, and overscroll determine the top boundary", () => {
  const h = createHarness({
    props: { contentInset: { top: 24 }, contentOffset: { x: 0, y: 50 } },
  });
  h.down();
  assert.equal(h.state, "failed");
  h.scroll(-23);
  h.down();
  assert.equal(h.state, "failed");
  for (const offset of [-24, -35]) {
    h.scroll(offset);
    h.down();
    h.move(0, 12);
    assert.equal(h.state, "active");
  }
});

test("top placement, horizontal lists, and multiple touches do not acquire sheet drag", () => {
  for (const options of [
    { placement: "top" },
    { props: { horizontal: true } },
  ]) {
    const h = createHarness(options);
    h.down();
    assert.equal(h.state, "failed");
  }
  const h = createHarness();
  h.down(100, 200, 2);
  assert.equal(h.state, "failed");
  h.down();
  h.move(0, 12, 2);
  assert.equal(h.state, "failed");
});

test("ScrollView preserves consumer callbacks, native ref, props, children and styles", () => {
  const props = {
    onScroll() {},
    onScrollBeginDrag() {},
    onScrollEndDrag() {},
    children: "body",
    style: { maxHeight: 200 },
    contentContainerStyle: { paddingHorizontal: 32 },
    keyboardShouldPersistTaps: "always",
    scrollEnabled: false,
    scrollEventThrottle: 32,
  };
  const h = createHarness({ props });
  const scroll = h.view.props.children.props;
  assert.equal(h.forwardedRef.current, h.instance);
  for (const key of [
    "onScroll",
    "onScrollBeginDrag",
    "onScrollEndDrag",
    "children",
    "keyboardShouldPersistTaps",
    "scrollEnabled",
    "scrollEventThrottle",
  ]) {
    assert.equal(scroll[key], props[key]);
  }
  assert.equal(scroll.style[1], props.style);
  assert.equal(scroll.contentContainerStyle[1], props.contentContainerStyle);
  const defaults = createHarness().view.props.children.props;
  assert.equal(defaults.keyboardShouldPersistTaps, "handled");
  assert.equal(defaults.scrollEventThrottle, 16);
});

test("flyout gesture hooks compile with the native app Worklets Babel plugin", () => {
  const configFile = fileURLToPath(
    new URL("../apps/impulse-ui-native/babel.config.js", import.meta.url),
  );
  for (const hook of ["use-flyout-scroll-gesture", "use-flyout-lifecycle"]) {
    const filename = fileURLToPath(
      new URL(`../packages/flyout/src/hooks/${hook}.hook.ts`, import.meta.url),
    );
    const result = transformFileSync(filename, { configFile, babelrc: false });
    assert.ok(result?.code);
    assert.ok(
      result.code.includes("__workletHash"),
      `${hook} must produce compiled worklets`,
    );
  }
});

test("Flyout.FlatList preserves native list props and ref methods with the same drag arbitration", () => {
  const props = {
    data: [{ id: "one" }],
    renderItem() {},
    keyExtractor: (item) => item.id,
    onScroll() {},
    onEndReached() {},
    getItemLayout() {},
    CellRendererComponent() {},
    ListHeaderComponent() {},
    ListFooterComponent() {},
    initialNumToRender: 12,
    contentContainerStyle: { paddingHorizontal: 28 },
    style: { maxHeight: 300 },
  };
  const h = createHarness({ flatList: true, props });
  const list = h.view.props.children;
  assert.equal(list.type, "FlatList");
  for (const key of [
    "data",
    "renderItem",
    "keyExtractor",
    "onScroll",
    "onEndReached",
    "getItemLayout",
    "CellRendererComponent",
    "ListHeaderComponent",
    "ListFooterComponent",
    "initialNumToRender",
  ]) {
    assert.equal(list.props[key], props[key]);
  }
  assert.equal(h.forwardedRef.current.scrollToIndex, h.instance.scrollToIndex);
  assert.equal(
    h.forwardedRef.current.scrollToOffset,
    h.instance.scrollToOffset,
  );
  assert.equal(list.props.style[1], props.style);
  assert.equal(
    list.props.contentContainerStyle[1],
    props.contentContainerStyle,
  );
  assert.equal(list.props.keyboardShouldPersistTaps, "handled");
  h.down();
  h.move(0, 12);
  assert.equal(h.state, "active");
  h.scroll(100);
  h.down();
  h.scroll(0);
  h.move(0, 120);
  assert.equal(h.state, "failed");
});
