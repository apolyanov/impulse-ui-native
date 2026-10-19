import { createIcon } from "../../hocs/create-icon.hoc";
import { GolfBoldIcon } from "../bold/golf-bold.icon";
import { GolfDuotoneIcon } from "../duotone/golf-duotone.icon";
import { GolfFillIcon } from "../fill/golf-fill.icon";
import { GolfLightIcon } from "../light/golf-light.icon";
import { GolfRegularIcon } from "../regular/golf-regular.icon";
import { GolfThinIcon } from "../thin/golf-thin.icon";

export const GolfIcon = createIcon("Golf", {
  bold: GolfBoldIcon,
  duotone: GolfDuotoneIcon,
  fill: GolfFillIcon,
  light: GolfLightIcon,
  regular: GolfRegularIcon,
  thin: GolfThinIcon,
});
