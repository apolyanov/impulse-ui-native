import { createIcon } from "../../hocs/create-icon.hoc";
import { PhoneDisconnectBoldIcon } from "../bold/phone-disconnect-bold.icon";
import { PhoneDisconnectDuotoneIcon } from "../duotone/phone-disconnect-duotone.icon";
import { PhoneDisconnectFillIcon } from "../fill/phone-disconnect-fill.icon";
import { PhoneDisconnectLightIcon } from "../light/phone-disconnect-light.icon";
import { PhoneDisconnectRegularIcon } from "../regular/phone-disconnect-regular.icon";
import { PhoneDisconnectThinIcon } from "../thin/phone-disconnect-thin.icon";

export const PhoneDisconnectIcon = createIcon("PhoneDisconnect", {
  bold: PhoneDisconnectBoldIcon,
  duotone: PhoneDisconnectDuotoneIcon,
  fill: PhoneDisconnectFillIcon,
  light: PhoneDisconnectLightIcon,
  regular: PhoneDisconnectRegularIcon,
  thin: PhoneDisconnectThinIcon,
});
