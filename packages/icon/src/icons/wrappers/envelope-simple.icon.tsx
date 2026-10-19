import { createIcon } from "../../hocs/create-icon.hoc";
import { EnvelopeSimpleBoldIcon } from "../bold/envelope-simple-bold.icon";
import { EnvelopeSimpleDuotoneIcon } from "../duotone/envelope-simple-duotone.icon";
import { EnvelopeSimpleFillIcon } from "../fill/envelope-simple-fill.icon";
import { EnvelopeSimpleLightIcon } from "../light/envelope-simple-light.icon";
import { EnvelopeSimpleRegularIcon } from "../regular/envelope-simple-regular.icon";
import { EnvelopeSimpleThinIcon } from "../thin/envelope-simple-thin.icon";

export const EnvelopeSimpleIcon = createIcon("EnvelopeSimple", {
  bold: EnvelopeSimpleBoldIcon,
  duotone: EnvelopeSimpleDuotoneIcon,
  fill: EnvelopeSimpleFillIcon,
  light: EnvelopeSimpleLightIcon,
  regular: EnvelopeSimpleRegularIcon,
  thin: EnvelopeSimpleThinIcon,
});
