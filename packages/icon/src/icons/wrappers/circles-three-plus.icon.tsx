import { createIcon } from "../../hocs/create-icon.hoc";
import { CirclesThreePlusBoldIcon } from "../bold/circles-three-plus-bold.icon";
import { CirclesThreePlusDuotoneIcon } from "../duotone/circles-three-plus-duotone.icon";
import { CirclesThreePlusFillIcon } from "../fill/circles-three-plus-fill.icon";
import { CirclesThreePlusLightIcon } from "../light/circles-three-plus-light.icon";
import { CirclesThreePlusRegularIcon } from "../regular/circles-three-plus-regular.icon";
import { CirclesThreePlusThinIcon } from "../thin/circles-three-plus-thin.icon";

export const CirclesThreePlusIcon = createIcon("CirclesThreePlus", {
  bold: CirclesThreePlusBoldIcon,
  duotone: CirclesThreePlusDuotoneIcon,
  fill: CirclesThreePlusFillIcon,
  light: CirclesThreePlusLightIcon,
  regular: CirclesThreePlusRegularIcon,
  thin: CirclesThreePlusThinIcon,
});
