import { createIcon } from "../../hocs/create-icon.hoc";
import { SeatBoldIcon } from "../bold/seat-bold.icon";
import { SeatDuotoneIcon } from "../duotone/seat-duotone.icon";
import { SeatFillIcon } from "../fill/seat-fill.icon";
import { SeatLightIcon } from "../light/seat-light.icon";
import { SeatRegularIcon } from "../regular/seat-regular.icon";
import { SeatThinIcon } from "../thin/seat-thin.icon";

export const SeatIcon = createIcon("Seat", {
  bold: SeatBoldIcon,
  duotone: SeatDuotoneIcon,
  fill: SeatFillIcon,
  light: SeatLightIcon,
  regular: SeatRegularIcon,
  thin: SeatThinIcon,
});
