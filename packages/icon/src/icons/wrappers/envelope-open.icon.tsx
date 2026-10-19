import { createIcon } from "../../hocs/create-icon.hoc";
import { EnvelopeOpenBoldIcon } from "../bold/envelope-open-bold.icon";
import { EnvelopeOpenDuotoneIcon } from "../duotone/envelope-open-duotone.icon";
import { EnvelopeOpenFillIcon } from "../fill/envelope-open-fill.icon";
import { EnvelopeOpenLightIcon } from "../light/envelope-open-light.icon";
import { EnvelopeOpenRegularIcon } from "../regular/envelope-open-regular.icon";
import { EnvelopeOpenThinIcon } from "../thin/envelope-open-thin.icon";

export const EnvelopeOpenIcon = createIcon("EnvelopeOpen", {
  bold: EnvelopeOpenBoldIcon,
  duotone: EnvelopeOpenDuotoneIcon,
  fill: EnvelopeOpenFillIcon,
  light: EnvelopeOpenLightIcon,
  regular: EnvelopeOpenRegularIcon,
  thin: EnvelopeOpenThinIcon,
});
