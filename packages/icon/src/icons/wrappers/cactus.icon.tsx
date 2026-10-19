import { createIcon } from "../../hocs/create-icon.hoc";
import { CactusBoldIcon } from "../bold/cactus-bold.icon";
import { CactusDuotoneIcon } from "../duotone/cactus-duotone.icon";
import { CactusFillIcon } from "../fill/cactus-fill.icon";
import { CactusLightIcon } from "../light/cactus-light.icon";
import { CactusRegularIcon } from "../regular/cactus-regular.icon";
import { CactusThinIcon } from "../thin/cactus-thin.icon";

export const CactusIcon = createIcon("Cactus", {
  bold: CactusBoldIcon,
  duotone: CactusDuotoneIcon,
  fill: CactusFillIcon,
  light: CactusLightIcon,
  regular: CactusRegularIcon,
  thin: CactusThinIcon,
});
