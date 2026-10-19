import { createIcon } from "../../hocs/create-icon.hoc";
import { SubwayBoldIcon } from "../bold/subway-bold.icon";
import { SubwayDuotoneIcon } from "../duotone/subway-duotone.icon";
import { SubwayFillIcon } from "../fill/subway-fill.icon";
import { SubwayLightIcon } from "../light/subway-light.icon";
import { SubwayRegularIcon } from "../regular/subway-regular.icon";
import { SubwayThinIcon } from "../thin/subway-thin.icon";

export const SubwayIcon = createIcon("Subway", {
  bold: SubwayBoldIcon,
  duotone: SubwayDuotoneIcon,
  fill: SubwayFillIcon,
  light: SubwayLightIcon,
  regular: SubwayRegularIcon,
  thin: SubwayThinIcon,
});
