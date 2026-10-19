import { createIcon } from "../../hocs/create-icon.hoc";
import { FactoryBoldIcon } from "../bold/factory-bold.icon";
import { FactoryDuotoneIcon } from "../duotone/factory-duotone.icon";
import { FactoryFillIcon } from "../fill/factory-fill.icon";
import { FactoryLightIcon } from "../light/factory-light.icon";
import { FactoryRegularIcon } from "../regular/factory-regular.icon";
import { FactoryThinIcon } from "../thin/factory-thin.icon";

export const FactoryIcon = createIcon("Factory", {
  bold: FactoryBoldIcon,
  duotone: FactoryDuotoneIcon,
  fill: FactoryFillIcon,
  light: FactoryLightIcon,
  regular: FactoryRegularIcon,
  thin: FactoryThinIcon,
});
