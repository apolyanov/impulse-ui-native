import { createIcon } from "../../hocs/create-icon.hoc";
import { PencilRulerBoldIcon } from "../bold/pencil-ruler-bold.icon";
import { PencilRulerDuotoneIcon } from "../duotone/pencil-ruler-duotone.icon";
import { PencilRulerFillIcon } from "../fill/pencil-ruler-fill.icon";
import { PencilRulerLightIcon } from "../light/pencil-ruler-light.icon";
import { PencilRulerRegularIcon } from "../regular/pencil-ruler-regular.icon";
import { PencilRulerThinIcon } from "../thin/pencil-ruler-thin.icon";

export const PencilRulerIcon = createIcon("PencilRuler", {
  bold: PencilRulerBoldIcon,
  duotone: PencilRulerDuotoneIcon,
  fill: PencilRulerFillIcon,
  light: PencilRulerLightIcon,
  regular: PencilRulerRegularIcon,
  thin: PencilRulerThinIcon,
});
