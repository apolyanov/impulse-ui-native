import { createIcon } from "../../hocs/create-icon.hoc";
import { BugBeetleBoldIcon } from "../bold/bug-beetle-bold.icon";
import { BugBeetleDuotoneIcon } from "../duotone/bug-beetle-duotone.icon";
import { BugBeetleFillIcon } from "../fill/bug-beetle-fill.icon";
import { BugBeetleLightIcon } from "../light/bug-beetle-light.icon";
import { BugBeetleRegularIcon } from "../regular/bug-beetle-regular.icon";
import { BugBeetleThinIcon } from "../thin/bug-beetle-thin.icon";

export const BugBeetleIcon = createIcon("BugBeetle", {
  bold: BugBeetleBoldIcon,
  duotone: BugBeetleDuotoneIcon,
  fill: BugBeetleFillIcon,
  light: BugBeetleLightIcon,
  regular: BugBeetleRegularIcon,
  thin: BugBeetleThinIcon,
});
