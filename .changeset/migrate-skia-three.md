---
"@impulse-ui-native/charts": major
"@impulse-ui-native/toolkit": major
---

Replace the Shopify-scoped Skia peer with react-native-skia ^3.11.0 and migrate canvas sizing to the Skia 3 layout API. Custom useChartCanvas consumers must attach onLayout to Canvas as well as the ref.

Skia 3 uses Graphite and requires iOS 15.1+ and Android API 26+ with Vulkan 1.1. Expo applications must use a newly built native development client instead of Expo Go. Remove the former Skia package before installing the replacement because they expose the same native module.
