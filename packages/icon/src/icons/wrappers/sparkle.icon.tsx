import { createIcon } from "../../hocs/create-icon.hoc";
import { SparkleBoldIcon } from "../bold/sparkle-bold.icon";
import { SparkleDuotoneIcon } from "../duotone/sparkle-duotone.icon";
import { SparkleFillIcon } from "../fill/sparkle-fill.icon";
import { SparkleLightIcon } from "../light/sparkle-light.icon";
import { SparkleRegularIcon } from "../regular/sparkle-regular.icon";
import { SparkleThinIcon } from "../thin/sparkle-thin.icon";

export const SparkleIcon = createIcon("Sparkle", {
  bold: SparkleBoldIcon,
  duotone: SparkleDuotoneIcon,
  fill: SparkleFillIcon,
  light: SparkleLightIcon,
  regular: SparkleRegularIcon,
  thin: SparkleThinIcon,
});
