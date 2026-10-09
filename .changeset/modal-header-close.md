---
"@impulse-ui-native/modal": minor
"@impulse-ui-native/storybook": patch
---

Add Modal.Provider above Root to own the lifecycle and share context with Close.
Modal.Close renders supplied children and dismisses automatically while preserving
consumer press callbacks. The convenience component uses plain JSX composition
with a default neutral X and hideClose, without a children callback.

For compound usage, move id, open, layer, and lifecycle callbacks from Root to
Provider. Keep Provider and Root inside the local Portal.
