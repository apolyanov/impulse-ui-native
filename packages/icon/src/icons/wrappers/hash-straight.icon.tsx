import { createIcon } from "../../hocs/create-icon.hoc";
import { HashStraightBoldIcon } from "../bold/hash-straight-bold.icon";
import { HashStraightDuotoneIcon } from "../duotone/hash-straight-duotone.icon";
import { HashStraightFillIcon } from "../fill/hash-straight-fill.icon";
import { HashStraightLightIcon } from "../light/hash-straight-light.icon";
import { HashStraightRegularIcon } from "../regular/hash-straight-regular.icon";
import { HashStraightThinIcon } from "../thin/hash-straight-thin.icon";

export const HashStraightIcon = createIcon("HashStraight", {
  bold: HashStraightBoldIcon,
  duotone: HashStraightDuotoneIcon,
  fill: HashStraightFillIcon,
  light: HashStraightLightIcon,
  regular: HashStraightRegularIcon,
  thin: HashStraightThinIcon,
});
