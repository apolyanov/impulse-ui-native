# @impulse-ui-native/modal

Presentation parts for a native dialog surface. This package currently renders
inline and supplies layout, typography, and theme styling only.

## Installation

Install `@impulse-ui-native/modal` with React and React Native. Wrap the
application in `ThemeProvider`. The toolkit also exports Modal.

## Compound composition

```tsx
import { Modal } from "@impulse-ui-native/modal";

<Modal.Root size="medium">
  <Modal.Header>
    <Modal.Title>Project details</Modal.Title>
  </Modal.Header>
  <Modal.Content>
    <Modal.Description>Update your project details.</Modal.Description>
    {/* Supply short native content here. */}
  </Modal.Content>
  <Modal.Footer>{/* Supply application actions here. */}</Modal.Footer>
</Modal.Root>;
```

Root is the main styled container. Header, Content, Footer, Title, and Description
render supplied children. Each part uses theme tokens independently and extends
the corresponding View or Text primitive props. Content is a regular View.

## Convenience composition

```tsx
<Modal size="medium" header={<Modal.Title>Project details</Modal.Title>}>
  <Modal.Description>Update your project details.</Modal.Description>
</Modal>
```

Modal composes Root, Header, Content, and Footer. It does not generate icons,
labels, or actions. Header and Footer render when their supplied content is truthy.

## Tokens and sizes

The default size is medium. Maximum widths are 320, 440, and 640 for small,
medium, and large, with 100% width within the parent. The caller positions the
surface. Root uses the elevated surface, subtle border, a 16-point radius, and
16-point padding from the theme. Header is a horizontal row, Content groups
children vertically, and Footer is a trailing row that wraps.

Customize presentation with primitive style props, native style, or
`ThemeProvider`'s `components.modal` tokens.

## Current scope

There is no open state, context, provider, Portal, backdrop, dismissal, keyboard
avoidance, animation, or built-in scrolling. Dialog behavior is future work.
