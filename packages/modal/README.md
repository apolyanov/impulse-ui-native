# @impulse-ui-native/modal

A compact, themed native dialog with compound presentation parts and an overlay
lifecycle. Use it locally inside a Portal or register it globally with OverlayHost.

## Installation

```sh
pnpm add @impulse-ui-native/modal react-native-reanimated react-native-safe-area-context react-native-worklets
```

Complete the native setup for Reanimated and Worklets, and wrap the application
in ThemeProvider and SafeAreaProvider. Local portal usage additionally requires
@impulse-ui-native/portal with PortalProvider and PortalsHost. Global usage requires
@impulse-ui-native/overlay with OverlayProvider and OverlayHost. The toolkit exports Modal.

## Local composition

Keep Portal mounted and control open from the nearby trigger:

```tsx
import { Modal } from "@impulse-ui-native/modal";
import { Portal } from "@impulse-ui-native/portal";
import { Button } from "@impulse-ui-native/primitives";

<>
  <Button onPress={() => setOpen(true)}>Project details</Button>
  <Portal>
    <Modal
      id="project-details"
      open={open}
      title="Project details"
      onClose={() => setOpen(false)}
      footer={<Button onPress={() => setOpen(false)}>Done</Button>}
    >
      <Modal.Description>Review the project details.</Modal.Description>
    </Modal>
  </Portal>
</>;
```

Modal composes Root, Header, Content, and Footer. A truthy header replaces the
generated title header; a truthy footer renders the footer. Root supplies the
centered surface, safe-area padding, backdrop, Android back dismissal, and animations.
Root does not install a Portal, context, or provider.

## Compound composition

```tsx
<Portal>
  <Modal.Root id="project-details" open={open} onClose={() => setOpen(false)}>
    <Modal.Header>
      <Modal.Title>Project details</Modal.Title>
    </Modal.Header>
    <Modal.Content>
      <Modal.Description>Review the project details.</Modal.Description>
    </Modal.Content>
    <Modal.Footer>
      <Button onPress={() => setOpen(false)}>Done</Button>
    </Modal.Footer>
  </Modal.Root>
</Portal>
```

Header, Content, Footer, Title, and Description render supplied children and use
independent theme styling. They accept the corresponding View or Text primitive
props. Content is a regular View with no built-in scrolling. Keep dialog content short.
Root's View props and style customize the surface.

## Global OverlayHost usage

Register Modal directly with the store provided to OverlayProvider:

```tsx
const detailsModal = store.register({
  id: "project-details",
  unique: true,
  Component: Modal,
  Content: ProjectDetails,
  title: "Project details",
  onClose: (id) => store.close(id),
});

detailsModal.open();
detailsModal.close();
```

OverlayHost supplies id, open, layer, title, and lifecycle callbacks. It removes
the entry after onCloseFinished. Do not wrap each registered modal in another
Portal; mount OverlayHost at the application overlay level.

## Lifecycle

Root accepts the OverlayComponentProps contract except title, which the
convenience Modal uses to generate its header. id is required, open defaults to
false, and layer defaults to zero.

Opening calls onOpen(id), then onOpenFinished(id) after entry. Backdrop presses,
Android back presses, and changing open to false begin dismissal and call
onClose(id). The modal stays mounted for the exit animation, then calls
onCloseFinished(id). For local usage, update open in onClose and keep Root mounted
through the exit. Reopening during exit cancels the stale closing completion.

The backdrop accepts presses without pressed-state visual feedback. The fade
and scale animations use Reanimated. Animations are canceled when Root unmounts.

## Tokens and sizes

Maximum widths are 320, 440, and 640 for small, medium, and large; medium is the
default. Available width accounts for safe-area insets and themed viewport padding.
Root uses the elevated surface, subtle border, 16-point radius, and 16-point inner
padding. Header is horizontal; Footer aligns trailing actions and wraps.

Customize through primitive style props, native style, or ThemeProvider's
components.modal tokens. Overlay tokens control backdrop color and opacity,
base z-index, viewport padding, and the closed animation scale. Content does not
scroll, and keyboard avoidance is not built in.

Root uses the shared useOverlayLifecycle hook from the overlay package. Observe
local status with onStatusChange(id, status), or hosted status with useOverlayStatus(id).
