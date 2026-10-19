import { createIcon } from "../../hocs/create-icon.hoc";
import { WaveTriangleBoldIcon } from "../bold/wave-triangle-bold.icon";
import { WaveTriangleDuotoneIcon } from "../duotone/wave-triangle-duotone.icon";
import { WaveTriangleFillIcon } from "../fill/wave-triangle-fill.icon";
import { WaveTriangleLightIcon } from "../light/wave-triangle-light.icon";
import { WaveTriangleRegularIcon } from "../regular/wave-triangle-regular.icon";
import { WaveTriangleThinIcon } from "../thin/wave-triangle-thin.icon";

export const WaveTriangleIcon = createIcon("WaveTriangle", {
  bold: WaveTriangleBoldIcon,
  duotone: WaveTriangleDuotoneIcon,
  fill: WaveTriangleFillIcon,
  light: WaveTriangleLightIcon,
  regular: WaveTriangleRegularIcon,
  thin: WaveTriangleThinIcon,
});
