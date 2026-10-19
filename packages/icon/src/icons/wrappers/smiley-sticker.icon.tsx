import { createIcon } from "../../hocs/create-icon.hoc";
import { SmileyStickerBoldIcon } from "../bold/smiley-sticker-bold.icon";
import { SmileyStickerDuotoneIcon } from "../duotone/smiley-sticker-duotone.icon";
import { SmileyStickerFillIcon } from "../fill/smiley-sticker-fill.icon";
import { SmileyStickerLightIcon } from "../light/smiley-sticker-light.icon";
import { SmileyStickerRegularIcon } from "../regular/smiley-sticker-regular.icon";
import { SmileyStickerThinIcon } from "../thin/smiley-sticker-thin.icon";

export const SmileyStickerIcon = createIcon("SmileySticker", {
  bold: SmileyStickerBoldIcon,
  duotone: SmileyStickerDuotoneIcon,
  fill: SmileyStickerFillIcon,
  light: SmileyStickerLightIcon,
  regular: SmileyStickerRegularIcon,
  thin: SmileyStickerThinIcon,
});
