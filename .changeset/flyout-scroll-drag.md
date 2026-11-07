---
"@impulse-ui-native/flyout": minor
"@impulse-ui-native/toolkit": minor
---

Allow downward swipes that begin at the top of a bottom Flyout.ScrollView to drag and dismiss the sheet. Keep swipes begun below the top with native scrolling until release, and restore the sheet after cancelled drags.

Use the Gesture Handler 3 hook API and exported PanGesture type instead of the deprecated gesture builders. Require Gesture Handler 3 or newer for Flyout and its toolkit aggregation.

Allow drags during entry as soon as the measured sheet is interactive, retaining the current sheet position when a drag interrupts the entrance spring.

Add Flyout.FlatList, a thin native FlatList wrapper with shared scroll/drag coordination, themed padding, native list props and generic refs.
