import { createIcon } from "../../hocs/create-icon.hoc";
import { UmbrellaSimpleBoldIcon } from "../bold/umbrella-simple-bold.icon";
import { UmbrellaSimpleDuotoneIcon } from "../duotone/umbrella-simple-duotone.icon";
import { UmbrellaSimpleFillIcon } from "../fill/umbrella-simple-fill.icon";
import { UmbrellaSimpleLightIcon } from "../light/umbrella-simple-light.icon";
import { UmbrellaSimpleRegularIcon } from "../regular/umbrella-simple-regular.icon";
import { UmbrellaSimpleThinIcon } from "../thin/umbrella-simple-thin.icon";

export const UmbrellaSimpleIcon = createIcon("UmbrellaSimple", {
  bold: UmbrellaSimpleBoldIcon,
  duotone: UmbrellaSimpleDuotoneIcon,
  fill: UmbrellaSimpleFillIcon,
  light: UmbrellaSimpleLightIcon,
  regular: UmbrellaSimpleRegularIcon,
  thin: UmbrellaSimpleThinIcon,
});
