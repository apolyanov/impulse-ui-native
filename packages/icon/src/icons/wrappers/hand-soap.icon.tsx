import { createIcon } from "../../hocs/create-icon.hoc";
import { HandSoapBoldIcon } from "../bold/hand-soap-bold.icon";
import { HandSoapDuotoneIcon } from "../duotone/hand-soap-duotone.icon";
import { HandSoapFillIcon } from "../fill/hand-soap-fill.icon";
import { HandSoapLightIcon } from "../light/hand-soap-light.icon";
import { HandSoapRegularIcon } from "../regular/hand-soap-regular.icon";
import { HandSoapThinIcon } from "../thin/hand-soap-thin.icon";

export const HandSoapIcon = createIcon("HandSoap", {
  bold: HandSoapBoldIcon,
  duotone: HandSoapDuotoneIcon,
  fill: HandSoapFillIcon,
  light: HandSoapLightIcon,
  regular: HandSoapRegularIcon,
  thin: HandSoapThinIcon,
});
