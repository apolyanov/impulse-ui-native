import { createIcon } from "../../hocs/create-icon.hoc";
import { WaveSineBoldIcon } from "../bold/wave-sine-bold.icon";
import { WaveSineDuotoneIcon } from "../duotone/wave-sine-duotone.icon";
import { WaveSineFillIcon } from "../fill/wave-sine-fill.icon";
import { WaveSineLightIcon } from "../light/wave-sine-light.icon";
import { WaveSineRegularIcon } from "../regular/wave-sine-regular.icon";
import { WaveSineThinIcon } from "../thin/wave-sine-thin.icon";

export const WaveSineIcon = createIcon("WaveSine", {
  bold: WaveSineBoldIcon,
  duotone: WaveSineDuotoneIcon,
  fill: WaveSineFillIcon,
  light: WaveSineLightIcon,
  regular: WaveSineRegularIcon,
  thin: WaveSineThinIcon,
});
