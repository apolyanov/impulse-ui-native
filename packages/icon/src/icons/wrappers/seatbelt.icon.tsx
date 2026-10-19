import { createIcon } from "../../hocs/create-icon.hoc";
import { SeatbeltBoldIcon } from "../bold/seatbelt-bold.icon";
import { SeatbeltDuotoneIcon } from "../duotone/seatbelt-duotone.icon";
import { SeatbeltFillIcon } from "../fill/seatbelt-fill.icon";
import { SeatbeltLightIcon } from "../light/seatbelt-light.icon";
import { SeatbeltRegularIcon } from "../regular/seatbelt-regular.icon";
import { SeatbeltThinIcon } from "../thin/seatbelt-thin.icon";

export const SeatbeltIcon = createIcon("Seatbelt", {
  bold: SeatbeltBoldIcon,
  duotone: SeatbeltDuotoneIcon,
  fill: SeatbeltFillIcon,
  light: SeatbeltLightIcon,
  regular: SeatbeltRegularIcon,
  thin: SeatbeltThinIcon,
});
