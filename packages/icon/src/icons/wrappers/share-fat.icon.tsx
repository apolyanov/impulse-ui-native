import { createIcon } from "../../hocs/create-icon.hoc";
import { ShareFatBoldIcon } from "../bold/share-fat-bold.icon";
import { ShareFatDuotoneIcon } from "../duotone/share-fat-duotone.icon";
import { ShareFatFillIcon } from "../fill/share-fat-fill.icon";
import { ShareFatLightIcon } from "../light/share-fat-light.icon";
import { ShareFatRegularIcon } from "../regular/share-fat-regular.icon";
import { ShareFatThinIcon } from "../thin/share-fat-thin.icon";

export const ShareFatIcon = createIcon("ShareFat", {
  bold: ShareFatBoldIcon,
  duotone: ShareFatDuotoneIcon,
  fill: ShareFatFillIcon,
  light: ShareFatLightIcon,
  regular: ShareFatRegularIcon,
  thin: ShareFatThinIcon,
});
