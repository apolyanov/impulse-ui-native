import { createIcon } from "../../hocs/create-icon.hoc";
import { SphereBoldIcon } from "../bold/sphere-bold.icon";
import { SphereDuotoneIcon } from "../duotone/sphere-duotone.icon";
import { SphereFillIcon } from "../fill/sphere-fill.icon";
import { SphereLightIcon } from "../light/sphere-light.icon";
import { SphereRegularIcon } from "../regular/sphere-regular.icon";
import { SphereThinIcon } from "../thin/sphere-thin.icon";

export const SphereIcon = createIcon("Sphere", {
  bold: SphereBoldIcon,
  duotone: SphereDuotoneIcon,
  fill: SphereFillIcon,
  light: SphereLightIcon,
  regular: SphereRegularIcon,
  thin: SphereThinIcon,
});
