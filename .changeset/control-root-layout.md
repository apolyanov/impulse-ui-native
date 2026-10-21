---
"@impulse-ui-native/primitives": minor
"@impulse-ui-native/input": minor
"@impulse-ui-native/select": minor
"@impulse-ui-native/datetime": minor
---

Support layout props on the outer root of Input, Textarea, Select, MultiSelect,
and date/time pickers. Remove the forced full width from Control.Root so fields
stretch naturally in columns and can share row width with explicit flex props.
Existing input style and containerStyle props retain their targets.
