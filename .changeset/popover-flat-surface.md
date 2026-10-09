---
"@impulse-ui-native/popover": major
"@impulse-ui-native/theme": major
"@impulse-ui-native/storybook": patch
---

Remove Popover's surface prop, exported PopoverSurface type, and surface context
logic. Use a single flat secondary panel without a default shadow. Title and
Description consume their own theme colors without context.

Flatten components.popover.surfaces.elevated into the panel tokens, using
backgroundColor for the former value field. Move inverse hint styling into
components.popover.tooltip, with color for its text. Tooltip retains its compact
inverse presentation and sizes naturally through its own content styles.
