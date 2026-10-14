---
"@impulse-ui-native/charts": patch
---

Select chart values directly from native touch-down coordinates instead of
waiting for the pan gesture to reach ACTIVE, so simple taps show the tooltip
without a drag. Keep immediate native gesture ownership and tooltip dismissal.
