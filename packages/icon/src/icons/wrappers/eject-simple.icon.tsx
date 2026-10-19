import { createIcon } from "../../hocs/create-icon.hoc";
import { EjectSimpleBoldIcon } from "../bold/eject-simple-bold.icon";
import { EjectSimpleDuotoneIcon } from "../duotone/eject-simple-duotone.icon";
import { EjectSimpleFillIcon } from "../fill/eject-simple-fill.icon";
import { EjectSimpleLightIcon } from "../light/eject-simple-light.icon";
import { EjectSimpleRegularIcon } from "../regular/eject-simple-regular.icon";
import { EjectSimpleThinIcon } from "../thin/eject-simple-thin.icon";

export const EjectSimpleIcon = createIcon("EjectSimple", {
  bold: EjectSimpleBoldIcon,
  duotone: EjectSimpleDuotoneIcon,
  fill: EjectSimpleFillIcon,
  light: EjectSimpleLightIcon,
  regular: EjectSimpleRegularIcon,
  thin: EjectSimpleThinIcon,
});
