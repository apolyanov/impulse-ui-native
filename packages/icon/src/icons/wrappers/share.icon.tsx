import { createIcon } from "../../hocs/create-icon.hoc";
import { ShareBoldIcon } from "../bold/share-bold.icon";
import { ShareDuotoneIcon } from "../duotone/share-duotone.icon";
import { ShareFillIcon } from "../fill/share-fill.icon";
import { ShareLightIcon } from "../light/share-light.icon";
import { ShareRegularIcon } from "../regular/share-regular.icon";
import { ShareThinIcon } from "../thin/share-thin.icon";

export const ShareIcon = createIcon("Share", {
  bold: ShareBoldIcon,
  duotone: ShareDuotoneIcon,
  fill: ShareFillIcon,
  light: ShareLightIcon,
  regular: ShareRegularIcon,
  thin: ShareThinIcon,
});
