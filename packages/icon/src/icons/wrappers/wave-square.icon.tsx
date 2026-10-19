import { createIcon } from "../../hocs/create-icon.hoc";
import { WaveSquareBoldIcon } from "../bold/wave-square-bold.icon";
import { WaveSquareDuotoneIcon } from "../duotone/wave-square-duotone.icon";
import { WaveSquareFillIcon } from "../fill/wave-square-fill.icon";
import { WaveSquareLightIcon } from "../light/wave-square-light.icon";
import { WaveSquareRegularIcon } from "../regular/wave-square-regular.icon";
import { WaveSquareThinIcon } from "../thin/wave-square-thin.icon";

export const WaveSquareIcon = createIcon("WaveSquare", {
  bold: WaveSquareBoldIcon,
  duotone: WaveSquareDuotoneIcon,
  fill: WaveSquareFillIcon,
  light: WaveSquareLightIcon,
  regular: WaveSquareRegularIcon,
  thin: WaveSquareThinIcon,
});
