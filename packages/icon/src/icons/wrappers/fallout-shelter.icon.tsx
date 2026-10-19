import { createIcon } from "../../hocs/create-icon.hoc";
import { FalloutShelterBoldIcon } from "../bold/fallout-shelter-bold.icon";
import { FalloutShelterDuotoneIcon } from "../duotone/fallout-shelter-duotone.icon";
import { FalloutShelterFillIcon } from "../fill/fallout-shelter-fill.icon";
import { FalloutShelterLightIcon } from "../light/fallout-shelter-light.icon";
import { FalloutShelterRegularIcon } from "../regular/fallout-shelter-regular.icon";
import { FalloutShelterThinIcon } from "../thin/fallout-shelter-thin.icon";

export const FalloutShelterIcon = createIcon("FalloutShelter", {
  bold: FalloutShelterBoldIcon,
  duotone: FalloutShelterDuotoneIcon,
  fill: FalloutShelterFillIcon,
  light: FalloutShelterLightIcon,
  regular: FalloutShelterRegularIcon,
  thin: FalloutShelterThinIcon,
});
