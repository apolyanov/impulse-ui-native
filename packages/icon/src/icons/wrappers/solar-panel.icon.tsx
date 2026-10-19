import { createIcon } from "../../hocs/create-icon.hoc";
import { SolarPanelBoldIcon } from "../bold/solar-panel-bold.icon";
import { SolarPanelDuotoneIcon } from "../duotone/solar-panel-duotone.icon";
import { SolarPanelFillIcon } from "../fill/solar-panel-fill.icon";
import { SolarPanelLightIcon } from "../light/solar-panel-light.icon";
import { SolarPanelRegularIcon } from "../regular/solar-panel-regular.icon";
import { SolarPanelThinIcon } from "../thin/solar-panel-thin.icon";

export const SolarPanelIcon = createIcon("SolarPanel", {
  bold: SolarPanelBoldIcon,
  duotone: SolarPanelDuotoneIcon,
  fill: SolarPanelFillIcon,
  light: SolarPanelLightIcon,
  regular: SolarPanelRegularIcon,
  thin: SolarPanelThinIcon,
});
