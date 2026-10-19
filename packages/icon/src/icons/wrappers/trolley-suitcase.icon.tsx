import { createIcon } from "../../hocs/create-icon.hoc";
import { TrolleySuitcaseBoldIcon } from "../bold/trolley-suitcase-bold.icon";
import { TrolleySuitcaseDuotoneIcon } from "../duotone/trolley-suitcase-duotone.icon";
import { TrolleySuitcaseFillIcon } from "../fill/trolley-suitcase-fill.icon";
import { TrolleySuitcaseLightIcon } from "../light/trolley-suitcase-light.icon";
import { TrolleySuitcaseRegularIcon } from "../regular/trolley-suitcase-regular.icon";
import { TrolleySuitcaseThinIcon } from "../thin/trolley-suitcase-thin.icon";

export const TrolleySuitcaseIcon = createIcon("TrolleySuitcase", {
  bold: TrolleySuitcaseBoldIcon,
  duotone: TrolleySuitcaseDuotoneIcon,
  fill: TrolleySuitcaseFillIcon,
  light: TrolleySuitcaseLightIcon,
  regular: TrolleySuitcaseRegularIcon,
  thin: TrolleySuitcaseThinIcon,
});
