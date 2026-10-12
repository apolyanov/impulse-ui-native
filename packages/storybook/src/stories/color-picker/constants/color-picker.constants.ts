import type { ColorPickerExampleDefinition } from "../types/color-picker-example.types";

export const ColorPickerExampleDefinitions: readonly ColorPickerExampleDefinition[] =
  [
    {
      name: "Default",
      title: "Full spectrum",
      description:
        "Choose saturation and brightness, move the hue slider, or enter a custom hex/RGB color. Valid input updates the color as you type; incomplete text waits for correction.",
      args: {},
    },
    {
      name: "Confirmation",
      title: "Apply and Cancel",
      description:
        "Edits update the preview while the committed value stays unchanged. Apply emits the draft; Cancel restores the committed color.",
      args: { commitMode: "confirm", defaultValue: "#F55D6B" },
    },
    {
      name: "Controlled",
      title: "Controlled selection",
      description:
        "The caller owns the color through value and onChange. External value updates replace any pending draft.",
      args: { defaultValue: "#1864AB" },
      controlled: true,
    },
    {
      name: "Small",
      title: "Small picker",
      description: "Compact geometry with native touch targets retained.",
      args: { size: "small" },
    },
    {
      name: "Large",
      title: "Large picker",
      description: "Larger spectrum, preview, and preset circles.",
      args: { size: "large" },
    },
    {
      name: "Disabled",
      title: "Disabled picker",
      description:
        "Spectrum, sliders, text fields, swatches, and confirmation actions all block edits.",
      args: { disabled: true, commitMode: "confirm", defaultValue: "#F55D6B" },
    },
    {
      name: "Alpha",
      title: "Transparent color",
      description:
        "Opacity is shown against a checkerboard and serialized as an eight-digit hex color. The opacity input accepts percentages from 0 to 100.",
      args: { defaultValue: "#F55D6B80" },
    },
    {
      name: "WithoutAlpha",
      title: "Hide opacity controls",
      description:
        "Omit the opacity slider and numeric field. Existing alpha is preserved and hex input still accepts alpha.",
      args: { showAlpha: false },
    },
    {
      name: "CustomPresets",
      title: "Custom presets",
      description:
        "Provide application colors and disable individual presets. Color values remain hex strings.",
      args: {
        presetsLabel: "Brand colors",
        presets: [
          { label: "Ocean", color: "#1864AB" },
          { label: "Forest", color: "#526B00" },
          { label: "Locked", color: "#A65300", disabled: true },
        ],
      },
    },
    {
      name: "NoPresets",
      title: "Spectrum only",
      description:
        "Hide the preset palette and its label while keeping custom color entry.",
      args: { showPresets: false },
    },
    {
      name: "Dark",
      title: "Dark theme",
      description:
        "Component chrome and presets follow the theme while the selected custom color stays the same.",
      args: { defaultValue: "#F55D6B", commitMode: "confirm" },
      scheme: "dark",
    },
  ];
