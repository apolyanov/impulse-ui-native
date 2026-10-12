import { ColorPickerAlphaInput } from "./alpha-input";
import { ColorPickerAlphaSlider } from "./alpha-slider";
import { ColorPickerApply } from "./apply";
import { ColorPickerCancel } from "./cancel";
import { ColorPickerChannelInput } from "./channel-input";
import { ColorPickerComponent } from "./color-picker";
import { ColorPickerHexInput } from "./hex-input";
import { ColorPickerHueSlider } from "./hue-slider";
import { ColorPickerPreview } from "./preview";
import { ColorPickerRoot } from "./root";
import { ColorPickerSpectrum } from "./spectrum";
import { ColorPickerSwatch } from "./swatch";

export const ColorPicker = Object.assign(ColorPickerComponent, {
  Root: ColorPickerRoot,
  Spectrum: ColorPickerSpectrum,
  HueSlider: ColorPickerHueSlider,
  AlphaSlider: ColorPickerAlphaSlider,
  Preview: ColorPickerPreview,
  HexInput: ColorPickerHexInput,
  ChannelInput: ColorPickerChannelInput,
  AlphaInput: ColorPickerAlphaInput,
  Swatch: ColorPickerSwatch,
  Apply: ColorPickerApply,
  Cancel: ColorPickerCancel,
});
