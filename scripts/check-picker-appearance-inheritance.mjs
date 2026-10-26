import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

// Render the composition boundaries with mocked hooks; no native layout is run.
const root = new URL("../", import.meta.url);
const theme = JSON.parse(
  fs.readFileSync(new URL("docs/design-system/tokens.light.json", root)),
);
const jsx = (type, props) => ({ type, props });
const draft = {
  selected: null,
  draft: null,
  tempDate: null,
  tempRange: null,
  visible: new Date(2026, 0, 1),
};
const hooks = new Proxy({}, { get: () => () => draft });
const names = new Proxy({}, { get: (_, name) => name });
const runtime = {
  react: {
    memo: (component) => component,
    useId: () => "picker",
    useMemo: (factory) => factory(),
    useCallback: (callback) => callback,
  },
  "react/jsx-runtime": { jsx, jsxs: jsx },
  "react-native": {
    ScrollView: "ScrollView",
    StyleSheet: { create: (styles) => styles },
  },
  "@impulse-ui-native/theme": {
    useComponentsTokens: () => theme.components,
    useThemedStyles: () => ({}),
  },
  "@impulse-ui-native/core": {
    memo: (component) => component,
    useEventCallback: (callback) => callback,
  },
};
function load(file) {
  const exports = {};
  const { outputText } = ts.transpileModule(
    fs.readFileSync(new URL(file, root), "utf8"),
    {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.ReactJSX,
      },
    },
  );
  vm.runInNewContext(outputText, {
    exports,
    require: (name) => {
      if (runtime[name]) return runtime[name];
      if (name.includes("hooks")) return hooks;
      if (name.includes("constants"))
        return {
          DefaultTimePickerValue: { hours: 0, minutes: 0, seconds: 0 },
          HourValues: [],
          MinuteSecondValues: [],
          TimePickerRangeRepeats: 1,
        };
      if (name.includes("utils"))
        return new Proxy(
          {},
          {
            get: (_, key) =>
              key === "getMonthNames" || key === "getYears"
                ? () => []
                : () => 0,
          },
        );
      return names;
    },
  });
  return exports;
}
function descendants(node) {
  if (!node || typeof node !== "object") return [];
  if (Array.isArray(node)) return node.flatMap(descendants);
  return [node, ...descendants(node.props?.children)];
}
const roots = [
  ["date/date-picker", "DatePicker", "DatePickerFlyout"],
  ["date/date-range-picker", "DateRangePicker", "DatePickerFlyout"],
  ["datetime/datetime-picker", "DatetimePicker", "DatetimePickerFlyout"],
  [
    "datetime/datetime-range-picker",
    "DatetimeRangePicker",
    "DatetimeRangePickerFlyout",
  ],
  ["time/time-picker", "TimePicker", "TimePickerFlyout"],
];
const flyouts = [
  ["date/date-picker.flyout", "DatePickerFlyout"],
  ["datetime/datetime-picker.flyout", "DatetimePickerFlyout"],
  ["datetime/datetime-range-picker.flyout", "DatetimeRangePickerFlyout"],
  ["time/time-picker.flyout", "TimePickerFlyout"],
];
let checks = 0;
for (const variant of ["filled", "outlined", "soft"]) {
  for (const tone of ["neutral", "primary", "secondary"]) {
    const props = {
      variant,
      tone,
      value: null,
      quickDateOptions: [{ label: "Today", value: new Date() }],
    };
    for (const [file, name, flyout] of roots) {
      const Component = load(`packages/datetime/src/components/${file}.tsx`)[
        name
      ];
      const nodes = descendants(Component(props));
      for (const type of ["DateControl", flyout]) {
        const node = nodes.find((item) => item.type === type);
        assert(node, `${name}: missing ${type}`);
        assert.equal(
          node.props.variant,
          type === "DateControl" ? variant : undefined,
          `${name} -> ${type} variant`,
        );
        assert.equal(node.props.tone, tone, `${name} -> ${type} tone`);
        checks++;
      }
      const defaults = Component({});
      assert.equal(defaults.props.variant, "outlined");
      assert.equal(defaults.props.tone, "neutral");
    }
    for (const [file, name] of flyouts) {
      const Component = load(`packages/datetime/src/components/${file}.tsx`)[
        name
      ];
      const { variant: _triggerVariant, ...flyoutProps } = props;
      const nodes = descendants(Component(flyoutProps));
      const children = nodes.filter((node) =>
        [
          "VisibleDateSelect",
          "TimePicker",
          "QuickDateOptions",
          "DatetimePickerFlyoutActions",
        ].includes(node.type),
      );
      assert(children.length > 0);
      for (const node of children) {
        const nestedField = node.type === "TimePicker";
        assert.equal(node.props.variant, nestedField ? "outlined" : undefined);
        const accentContent = node.type === "QuickDateOptions";
        assert.equal(
          node.props.tone,
          nestedField ? "neutral" : accentContent ? tone : undefined,
        );
        if (nestedField) assert.equal(node.props.pickerTone, tone);
        checks++;
      }
      assert.equal(
        nodes.find((node) => node.type === "Flyout").props.variant,
        undefined,
        "Do not forward variant to the flyout surface",
      );
    }
    for (const [file, name, childType, extra] of [
      [
        "visible-date-select",
        "VisibleDateSelect",
        "Select",
        { value: new Date() },
      ],
      [
        "datetime-picker-flyout-actions",
        "DatetimePickerFlyoutActions",
        "Button",
        {},
      ],
    ]) {
      const Component = load(
        `packages/datetime/src/components/common/${file}.tsx`,
      )[name];
      const children = descendants(Component({ ...props, ...extra })).filter(
        (node) => node.type === childType,
      );
      assert.equal(children.length, 2);
      for (const node of children) {
        const isAction = childType === "Button";
        const isApply = isAction && node.props.children === "Apply";
        assert.equal(node.props.variant, isApply ? "filled" : "outlined");
        assert.equal(node.props.tone, isApply ? "primary" : "neutral");
        checks++;
      }
    }
    const { QuickDateOptions } = load(
      "packages/datetime/src/components/common/quick-date-options.tsx",
    );
    const tagNode = descendants(
      QuickDateOptions({ ...props, options: props.quickDateOptions }),
    ).find((node) => node.type === "QuickDateOptionTag");
    const { QuickDateOptionTag } = load(
      "packages/datetime/src/components/common/quick-date-option-tag.tsx",
    );
    const tag = QuickDateOptionTag(tagNode.props);
    assert.equal(tag.props.variant, "outlined");
    assert.equal(tag.props.tone, "neutral");
    const selectedTag = QuickDateOptionTag({
      ...tagNode.props,
      selected: true,
    });
    assert.equal(selectedTag.props.variant, "soft");
    assert.equal(selectedTag.props.tone, tone);
    const selectedNodes = descendants(
      QuickDateOptions({
        ...props,
        value: props.quickDateOptions[0].value,
        options: props.quickDateOptions,
      }),
    );
    assert.equal(
      selectedNodes.find((node) => node.type === "QuickDateOptionTag").props
        .selected,
      true,
    );
    checks++;
  }
}
console.log(
  `Passed ${checks} picker composition checks across all variants and tones, including portal boundaries, action buttons, quick tags, and field defaults. Native rendering is not covered.`,
);
