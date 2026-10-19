import { createIcon } from "../../hocs/create-icon.hoc";
import { TrolleyBoldIcon } from "../bold/trolley-bold.icon";
import { TrolleyDuotoneIcon } from "../duotone/trolley-duotone.icon";
import { TrolleyFillIcon } from "../fill/trolley-fill.icon";
import { TrolleyLightIcon } from "../light/trolley-light.icon";
import { TrolleyRegularIcon } from "../regular/trolley-regular.icon";
import { TrolleyThinIcon } from "../thin/trolley-thin.icon";

export const TrolleyIcon = createIcon("Trolley", {
  bold: TrolleyBoldIcon,
  duotone: TrolleyDuotoneIcon,
  fill: TrolleyFillIcon,
  light: TrolleyLightIcon,
  regular: TrolleyRegularIcon,
  thin: TrolleyThinIcon,
});
