import { createIcon } from "../../hocs/create-icon.hoc";
import { FlagBannerBoldIcon } from "../bold/flag-banner-bold.icon";
import { FlagBannerDuotoneIcon } from "../duotone/flag-banner-duotone.icon";
import { FlagBannerFillIcon } from "../fill/flag-banner-fill.icon";
import { FlagBannerLightIcon } from "../light/flag-banner-light.icon";
import { FlagBannerRegularIcon } from "../regular/flag-banner-regular.icon";
import { FlagBannerThinIcon } from "../thin/flag-banner-thin.icon";

export const FlagBannerIcon = createIcon("FlagBanner", {
  bold: FlagBannerBoldIcon,
  duotone: FlagBannerDuotoneIcon,
  fill: FlagBannerFillIcon,
  light: FlagBannerLightIcon,
  regular: FlagBannerRegularIcon,
  thin: FlagBannerThinIcon,
});
