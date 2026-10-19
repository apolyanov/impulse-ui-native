import { createIcon } from "../../hocs/create-icon.hoc";
import { BlueprintBoldIcon } from "../bold/blueprint-bold.icon";
import { BlueprintDuotoneIcon } from "../duotone/blueprint-duotone.icon";
import { BlueprintFillIcon } from "../fill/blueprint-fill.icon";
import { BlueprintLightIcon } from "../light/blueprint-light.icon";
import { BlueprintRegularIcon } from "../regular/blueprint-regular.icon";
import { BlueprintThinIcon } from "../thin/blueprint-thin.icon";

export const BlueprintIcon = createIcon("Blueprint", {
  bold: BlueprintBoldIcon,
  duotone: BlueprintDuotoneIcon,
  fill: BlueprintFillIcon,
  light: BlueprintLightIcon,
  regular: BlueprintRegularIcon,
  thin: BlueprintThinIcon,
});
