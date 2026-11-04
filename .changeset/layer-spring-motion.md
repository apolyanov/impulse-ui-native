---
"@impulse-ui-native/overlay": minor
"@impulse-ui-native/theme": minor
"@impulse-ui-native/flyout": patch
"@impulse-ui-native/modal": patch
"@impulse-ui-native/toast": patch
"@impulse-ui-native/popover": major
---

Apply restrained spring motion across layers, preserve Flyout gesture release velocity, and animate measured Popover/Tooltip entry and retained exits without extra native containers. Add useOverlaySpring while retaining useOverlayTiming. Layer duration tokens now represent perceptual spring durations; lifecycle callbacks wait for settling. Popover requires Reanimated and Worklets peers.
