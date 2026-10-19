import { createIcon } from "../../hocs/create-icon.hoc";
import { HighDefinitionBoldIcon } from "../bold/high-definition-bold.icon";
import { HighDefinitionDuotoneIcon } from "../duotone/high-definition-duotone.icon";
import { HighDefinitionFillIcon } from "../fill/high-definition-fill.icon";
import { HighDefinitionLightIcon } from "../light/high-definition-light.icon";
import { HighDefinitionRegularIcon } from "../regular/high-definition-regular.icon";
import { HighDefinitionThinIcon } from "../thin/high-definition-thin.icon";

export const HighDefinitionIcon = createIcon("HighDefinition", {
  bold: HighDefinitionBoldIcon,
  duotone: HighDefinitionDuotoneIcon,
  fill: HighDefinitionFillIcon,
  light: HighDefinitionLightIcon,
  regular: HighDefinitionRegularIcon,
  thin: HighDefinitionThinIcon,
});
