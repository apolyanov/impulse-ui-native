import { createIcon } from "../../hocs/create-icon.hoc";
import { EnvelopeBoldIcon } from "../bold/envelope-bold.icon";
import { EnvelopeDuotoneIcon } from "../duotone/envelope-duotone.icon";
import { EnvelopeFillIcon } from "../fill/envelope-fill.icon";
import { EnvelopeLightIcon } from "../light/envelope-light.icon";
import { EnvelopeRegularIcon } from "../regular/envelope-regular.icon";
import { EnvelopeThinIcon } from "../thin/envelope-thin.icon";

export const EnvelopeIcon = createIcon("Envelope", {
  bold: EnvelopeBoldIcon,
  duotone: EnvelopeDuotoneIcon,
  fill: EnvelopeFillIcon,
  light: EnvelopeLightIcon,
  regular: EnvelopeRegularIcon,
  thin: EnvelopeThinIcon,
});
