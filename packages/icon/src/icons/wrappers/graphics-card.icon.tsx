import { createIcon } from "../../hocs/create-icon.hoc";
import { GraphicsCardBoldIcon } from "../bold/graphics-card-bold.icon";
import { GraphicsCardDuotoneIcon } from "../duotone/graphics-card-duotone.icon";
import { GraphicsCardFillIcon } from "../fill/graphics-card-fill.icon";
import { GraphicsCardLightIcon } from "../light/graphics-card-light.icon";
import { GraphicsCardRegularIcon } from "../regular/graphics-card-regular.icon";
import { GraphicsCardThinIcon } from "../thin/graphics-card-thin.icon";

export const GraphicsCardIcon = createIcon("GraphicsCard", {
  bold: GraphicsCardBoldIcon,
  duotone: GraphicsCardDuotoneIcon,
  fill: GraphicsCardFillIcon,
  light: GraphicsCardLightIcon,
  regular: GraphicsCardRegularIcon,
  thin: GraphicsCardThinIcon,
});
