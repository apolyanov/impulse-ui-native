# @impulse-ui-native/overlay

Typed, app-wide overlay registration and rendering for Impulse UI Native.

## Main exports

- `OverlayStore` registers, opens, closes, and removes overlay entries.
- `OverlayProvider` makes a store available to the component tree.
- `OverlayHost` renders the active overlay stack.
- `useOverlayContext` provides access to the current store.
- `useOverlayLifecycle` tracks component lifecycle status without requiring a provider.
- `useOverlayStatus(id)` observes the reported status of a hosted overlay.
- `useOverlayLayer(id, Component?, order?)` returns the entry's opening-order index among entries with the same registered component. Omit `Component` to infer it from the ID. The default `OverlayOrder.OldestFirst` order gives newer entries higher indices; `OverlayOrder.NewestFirst` gives the newest entry index zero. A missing ID returns `-1`. Closing entries remain counted until removed.

## Usage

```tsx
import {
  OverlayHost,
  OverlayProvider,
  OverlayStore,
} from "@impulse-ui-native/overlay";

const overlayStore = new OverlayStore();

<OverlayProvider store={overlayStore}>
  <App />
  <OverlayHost />
</OverlayProvider>;
```

Register a component with `overlayStore.register(...)`. The returned controller exposes `open` and `close` methods, while `OverlayHost` owns removal after the close animation finishes.

## Shared component lifecycle

`useOverlayLifecycle(props, options?)` tracks `closed`, `opening`, `open`, and
`closing` independently of OverlayProvider. `open` is the requested state; the
returned `status` is the current lifecycle state. Opening includes preparation
such as Flyout's initial layout measurement.

The hook returns status, mounted, interactive, close, and completeTransition.
`mounted` stays true through exit; `interactive` is true while opening or open
and ready. Each accepted transition emits onStatusChange(id, status) and the
corresponding existing lifecycle callback. Initially closed components do not
emit open or close callbacks.

Supply `onEnter(transitionId, complete)` and `onExit(transitionId, complete)` in
the options. The component owns animation values and configuration. After a
successful animation, call `complete(transitionId)` on the React Native thread.
The hook rejects obsolete or repeated completions, including after unmount.
Without an animation handler, that transition completes immediately.

For Reanimated components, completion is typically bridged with Worklets:

```tsx
const enter = useCallback<OverlayTransitionHandler>(
  (transitionId, complete) => {
    progress.set(
      withTiming(1, { duration: 180 }, (finished) => {
        if (finished) {
          scheduleOnRN(complete, transitionId);
        }
      }),
    );
  },
  [progress],
);

const options = useMemo(
  () => ({ onEnter: enter, onExit: exit }),
  [enter, exit],
);
const lifecycle = useOverlayLifecycle(props, options);
```

The component must cancel its animations on unmount. Use `ready: false` to keep
an opening component mounted while waiting for layout; entry starts when ready
becomes true. Exit handlers must also handle dismissal before readiness, usually
by completing immediately when nothing has appeared. Reopening during exit starts
a fresh transition and prevents the old completion from closing the new one.

## Observing hosted status

OverlayHost forwards component status reports into OverlayStore. The store
observes those reports; changing open does not invent an animation status.
`useOverlayStatus(id)` subscribes to the host store and returns the reported
status, or closed for a missing or not-yet-reported entry. This observer requires
OverlayProvider; the shared lifecycle hook itself does not.

Registered components must forward onStatusChange to the shared lifecycle hook
or report it themselves. Registrations may supply their own onStatusChange
callback alongside the host's tracking. Store entries expose their latest optional
status; host removal still happens through onCloseFinished.
