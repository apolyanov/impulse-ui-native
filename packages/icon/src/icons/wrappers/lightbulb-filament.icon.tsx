import { createIcon } from "../../hocs/create-icon.hoc";
import { LightbulbFilamentBoldIcon } from "../bold/lightbulb-filament-bold.icon";
import { LightbulbFilamentDuotoneIcon } from "../duotone/lightbulb-filament-duotone.icon";
import { LightbulbFilamentFillIcon } from "../fill/lightbulb-filament-fill.icon";
import { LightbulbFilamentLightIcon } from "../light/lightbulb-filament-light.icon";
import { LightbulbFilamentRegularIcon } from "../regular/lightbulb-filament-regular.icon";
import { LightbulbFilamentThinIcon } from "../thin/lightbulb-filament-thin.icon";

export const LightbulbFilamentIcon = createIcon("LightbulbFilament", {
  bold: LightbulbFilamentBoldIcon,
  duotone: LightbulbFilamentDuotoneIcon,
  fill: LightbulbFilamentFillIcon,
  light: LightbulbFilamentLightIcon,
  regular: LightbulbFilamentRegularIcon,
  thin: LightbulbFilamentThinIcon,
});
