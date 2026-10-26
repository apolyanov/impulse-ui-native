# Picker hierarchy comparison

The consistent outlined/neutral editor was selected and is now the library behavior. The inherited captures are retained as historical comparison frames. Open the [side-by-side comparison](picker-comparison.html) to compare three trigger appearances with their actual open native flyouts. Switch between light/dark and the two inheritance policies. All frames use primary selection accents and the same range, shortcuts and actions.

- **Consistent editor:** outlined/neutral month, year, start-time and end-time fields, independent of the trigger variant.
- **Inherited variant:** those fields use the trigger's variant with neutral tone, showing the previous implementation.

The filled inherited version creates four dark blocks in the light flyout and four light blocks in the dark flyout. These compete with the selected range and Apply button. The consistent editor avoids that change in emphasis when a form changes trigger appearance. The soft inherited version is quieter, but still changes the editor's hierarchy based on an unrelated trigger decision.

Actions are deliberately identical in both policies, preserving the current working-tree styling: filled/primary Apply, outlined/primary Cancel and primary Clear. This comparison isolates field inheritance. A separate action refinement can make Cancel and Clear neutral if desired.

The live native fixture now shows the selected consistent editor and lives in Storybook under **Design system/Picker hierarchy comparison**. It uses internal picker composition for design review; consumers should use the public picker components. The development route is `impulseuinative://picker-comparison?variant=filled&tone=primary&scheme=light`. Use the archived screenshot comparison to inspect the previous inherited policy. The picker opens after mount and can be reopened by pressing the trigger. The fixture demonstrates layout and initial state; it does not certify date/time editing or Apply/Cancel behavior.

Captured on an iPhone 18 Pro simulator, iOS 27.0, on 2026-10-26. The [capture manifest](picker-comparison.json) records exact parameters and image hashes. The screen is a genuine open flyout; the backdrop naturally obscures part of its trigger. These frames cover initial rendering, not gestures, keyboard behavior, Android, font scaling or accessibility contrast.
