---
"@impulse-ui-native/flyout": patch
---

Restrict drag dismissal to the flyout handle so the sheet gesture no longer
intercepts scrolling in FlatList and other content. Keep the handle inside the
sheet's native touch bounds for Android.
