import { createIcon } from "../../hocs/create-icon.hoc";
import { EnvelopeSimpleOpenBoldIcon } from "../bold/envelope-simple-open-bold.icon";
import { EnvelopeSimpleOpenDuotoneIcon } from "../duotone/envelope-simple-open-duotone.icon";
import { EnvelopeSimpleOpenFillIcon } from "../fill/envelope-simple-open-fill.icon";
import { EnvelopeSimpleOpenLightIcon } from "../light/envelope-simple-open-light.icon";
import { EnvelopeSimpleOpenRegularIcon } from "../regular/envelope-simple-open-regular.icon";
import { EnvelopeSimpleOpenThinIcon } from "../thin/envelope-simple-open-thin.icon";

export const EnvelopeSimpleOpenIcon = createIcon("EnvelopeSimpleOpen", {
  bold: EnvelopeSimpleOpenBoldIcon,
  duotone: EnvelopeSimpleOpenDuotoneIcon,
  fill: EnvelopeSimpleOpenFillIcon,
  light: EnvelopeSimpleOpenLightIcon,
  regular: EnvelopeSimpleOpenRegularIcon,
  thin: EnvelopeSimpleOpenThinIcon,
});
