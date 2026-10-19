import { createIcon } from "../../hocs/create-icon.hoc";
import { CourtBasketballBoldIcon } from "../bold/court-basketball-bold.icon";
import { CourtBasketballDuotoneIcon } from "../duotone/court-basketball-duotone.icon";
import { CourtBasketballFillIcon } from "../fill/court-basketball-fill.icon";
import { CourtBasketballLightIcon } from "../light/court-basketball-light.icon";
import { CourtBasketballRegularIcon } from "../regular/court-basketball-regular.icon";
import { CourtBasketballThinIcon } from "../thin/court-basketball-thin.icon";

export const CourtBasketballIcon = createIcon("CourtBasketball", {
  bold: CourtBasketballBoldIcon,
  duotone: CourtBasketballDuotoneIcon,
  fill: CourtBasketballFillIcon,
  light: CourtBasketballLightIcon,
  regular: CourtBasketballRegularIcon,
  thin: CourtBasketballThinIcon,
});
