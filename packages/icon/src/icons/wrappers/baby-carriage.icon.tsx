import { createIcon } from "../../hocs/create-icon.hoc";
import { BabyCarriageBoldIcon } from "../bold/baby-carriage-bold.icon";
import { BabyCarriageDuotoneIcon } from "../duotone/baby-carriage-duotone.icon";
import { BabyCarriageFillIcon } from "../fill/baby-carriage-fill.icon";
import { BabyCarriageLightIcon } from "../light/baby-carriage-light.icon";
import { BabyCarriageRegularIcon } from "../regular/baby-carriage-regular.icon";
import { BabyCarriageThinIcon } from "../thin/baby-carriage-thin.icon";

export const BabyCarriageIcon = createIcon("BabyCarriage", {
  bold: BabyCarriageBoldIcon,
  duotone: BabyCarriageDuotoneIcon,
  fill: BabyCarriageFillIcon,
  light: BabyCarriageLightIcon,
  regular: BabyCarriageRegularIcon,
  thin: BabyCarriageThinIcon,
});
