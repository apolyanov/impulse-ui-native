import { createIcon } from "../../hocs/create-icon.hoc";
import { CheckFatBoldIcon } from "../bold/check-fat-bold.icon";
import { CheckFatDuotoneIcon } from "../duotone/check-fat-duotone.icon";
import { CheckFatFillIcon } from "../fill/check-fat-fill.icon";
import { CheckFatLightIcon } from "../light/check-fat-light.icon";
import { CheckFatRegularIcon } from "../regular/check-fat-regular.icon";
import { CheckFatThinIcon } from "../thin/check-fat-thin.icon";

export const CheckFatIcon = createIcon("CheckFat", {
  bold: CheckFatBoldIcon,
  duotone: CheckFatDuotoneIcon,
  fill: CheckFatFillIcon,
  light: CheckFatLightIcon,
  regular: CheckFatRegularIcon,
  thin: CheckFatThinIcon,
});
