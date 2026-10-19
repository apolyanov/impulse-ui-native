import { createIcon } from "../../hocs/create-icon.hoc";
import { ShuffleBoldIcon } from "../bold/shuffle-bold.icon";
import { ShuffleDuotoneIcon } from "../duotone/shuffle-duotone.icon";
import { ShuffleFillIcon } from "../fill/shuffle-fill.icon";
import { ShuffleLightIcon } from "../light/shuffle-light.icon";
import { ShuffleRegularIcon } from "../regular/shuffle-regular.icon";
import { ShuffleThinIcon } from "../thin/shuffle-thin.icon";

export const ShuffleIcon = createIcon("Shuffle", {
  bold: ShuffleBoldIcon,
  duotone: ShuffleDuotoneIcon,
  fill: ShuffleFillIcon,
  light: ShuffleLightIcon,
  regular: ShuffleRegularIcon,
  thin: ShuffleThinIcon,
});
