import { createIcon } from "../../hocs/create-icon.hoc";
import { LightbulbBoldIcon } from "../bold/lightbulb-bold.icon";
import { LightbulbDuotoneIcon } from "../duotone/lightbulb-duotone.icon";
import { LightbulbFillIcon } from "../fill/lightbulb-fill.icon";
import { LightbulbLightIcon } from "../light/lightbulb-light.icon";
import { LightbulbRegularIcon } from "../regular/lightbulb-regular.icon";
import { LightbulbThinIcon } from "../thin/lightbulb-thin.icon";

export const LightbulbIcon = createIcon("Lightbulb", {
  bold: LightbulbBoldIcon,
  duotone: LightbulbDuotoneIcon,
  fill: LightbulbFillIcon,
  light: LightbulbLightIcon,
  regular: LightbulbRegularIcon,
  thin: LightbulbThinIcon,
});
