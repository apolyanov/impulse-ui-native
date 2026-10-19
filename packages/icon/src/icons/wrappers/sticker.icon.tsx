import { createIcon } from "../../hocs/create-icon.hoc";
import { StickerBoldIcon } from "../bold/sticker-bold.icon";
import { StickerDuotoneIcon } from "../duotone/sticker-duotone.icon";
import { StickerFillIcon } from "../fill/sticker-fill.icon";
import { StickerLightIcon } from "../light/sticker-light.icon";
import { StickerRegularIcon } from "../regular/sticker-regular.icon";
import { StickerThinIcon } from "../thin/sticker-thin.icon";

export const StickerIcon = createIcon("Sticker", {
  bold: StickerBoldIcon,
  duotone: StickerDuotoneIcon,
  fill: StickerFillIcon,
  light: StickerLightIcon,
  regular: StickerRegularIcon,
  thin: StickerThinIcon,
});
