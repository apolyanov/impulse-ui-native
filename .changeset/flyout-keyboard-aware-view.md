---
"@impulse-ui-native/flyout": minor
"@impulse-ui-native/select": minor
"@impulse-ui-native/toolkit": minor
---

Add Flyout.KeyboardAwareView, a single shrinkable body View that reserves keyboard
overlap as animated bottom padding. Root stays attached to its placement edge;
keyboard movement does not translate the sheet. Body padding can grow the sheet
to its normal height cap; supplied scroll containers shrink after that. Account for safe area and placement offsets,
support enabled/keyboardOffset and native refs, and restore natural sizing when
the keyboard closes. Use the body for Select options.

Install react-native-keyboard-controller and wrap the application and Portal/Overlay
hosts in KeyboardProvider, then rebuild the native app. Keyboard-aware bodies do
not automatically scroll focused inputs or dismiss the keyboard.
