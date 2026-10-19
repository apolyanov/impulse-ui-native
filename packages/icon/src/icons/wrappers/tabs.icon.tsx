import { createIcon } from "../../hocs/create-icon.hoc";
import { TabsBoldIcon } from "../bold/tabs-bold.icon";
import { TabsDuotoneIcon } from "../duotone/tabs-duotone.icon";
import { TabsFillIcon } from "../fill/tabs-fill.icon";
import { TabsLightIcon } from "../light/tabs-light.icon";
import { TabsRegularIcon } from "../regular/tabs-regular.icon";
import { TabsThinIcon } from "../thin/tabs-thin.icon";

export const TabsIcon = createIcon("Tabs", {
  bold: TabsBoldIcon,
  duotone: TabsDuotoneIcon,
  fill: TabsFillIcon,
  light: TabsLightIcon,
  regular: TabsRegularIcon,
  thin: TabsThinIcon,
});
