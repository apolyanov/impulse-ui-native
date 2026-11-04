import Reconciler from "react-reconciler";

export function createRenderer() {
  let priority = 0;
  const context = {};
  const append = (parent, child) => parent.children.push(child);
  const remove = (parent, child) =>
    parent.children.splice(parent.children.indexOf(child), 1);
  const renderer = Reconciler({
    supportsMutation: true,
    isPrimaryRenderer: false,
    supportsMicrotasks: true,
    scheduleMicrotask: queueMicrotask,
    now: Date.now,
    getRootHostContext: () => context,
    getChildHostContext: () => context,
    getPublicInstance: (instance) => instance,
    prepareForCommit: () => null,
    resetAfterCommit() {},
    createInstance: (type, props) => ({ type, props, children: [] }),
    createTextInstance: (text) => ({ text }),
    appendInitialChild: append,
    appendChild: append,
    appendChildToContainer: append,
    removeChild: remove,
    removeChildFromContainer: remove,
    shouldSetTextContent: () => false,
    finalizeInitialChildren: () => false,
    commitUpdate() {},
    commitTextUpdate() {},
    clearContainer(parent) {
      parent.children = [];
    },
    setCurrentUpdatePriority(value) {
      priority = value;
    },
    getCurrentUpdatePriority: () => priority,
    resolveUpdatePriority: () => 32,
    maySuspendCommit: () => false,
    preloadInstance: () => true,
    detachDeletedInstance() {},
    resetFormInstance() {},
  });
  const errors = [];
  const fail = (error) => errors.push(error);
  const root = renderer.createContainer(
    { children: [] },
    0,
    null,
    false,
    null,
    "",
    fail,
    fail,
    fail,
    null,
  );
  return (element) => {
    renderer.updateContainerSync(element, root, null, null);
    renderer.flushSyncWork();
    renderer.flushPassiveEffects();
    if (errors.length) throw errors.shift();
  };
}
