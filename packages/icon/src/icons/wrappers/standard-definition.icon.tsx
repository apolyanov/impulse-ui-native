import { createIcon } from "../../hocs/create-icon.hoc";
import { StandardDefinitionBoldIcon } from "../bold/standard-definition-bold.icon";
import { StandardDefinitionDuotoneIcon } from "../duotone/standard-definition-duotone.icon";
import { StandardDefinitionFillIcon } from "../fill/standard-definition-fill.icon";
import { StandardDefinitionLightIcon } from "../light/standard-definition-light.icon";
import { StandardDefinitionRegularIcon } from "../regular/standard-definition-regular.icon";
import { StandardDefinitionThinIcon } from "../thin/standard-definition-thin.icon";

export const StandardDefinitionIcon = createIcon("StandardDefinition", {
  bold: StandardDefinitionBoldIcon,
  duotone: StandardDefinitionDuotoneIcon,
  fill: StandardDefinitionFillIcon,
  light: StandardDefinitionLightIcon,
  regular: StandardDefinitionRegularIcon,
  thin: StandardDefinitionThinIcon,
});
