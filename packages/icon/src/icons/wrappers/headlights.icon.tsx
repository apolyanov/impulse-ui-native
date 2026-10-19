import { createIcon } from "../../hocs/create-icon.hoc";
import { HeadlightsBoldIcon } from "../bold/headlights-bold.icon";
import { HeadlightsDuotoneIcon } from "../duotone/headlights-duotone.icon";
import { HeadlightsFillIcon } from "../fill/headlights-fill.icon";
import { HeadlightsLightIcon } from "../light/headlights-light.icon";
import { HeadlightsRegularIcon } from "../regular/headlights-regular.icon";
import { HeadlightsThinIcon } from "../thin/headlights-thin.icon";

export const HeadlightsIcon = createIcon("Headlights", {
  bold: HeadlightsBoldIcon,
  duotone: HeadlightsDuotoneIcon,
  fill: HeadlightsFillIcon,
  light: HeadlightsLightIcon,
  regular: HeadlightsRegularIcon,
  thin: HeadlightsThinIcon,
});
