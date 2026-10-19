import { createIcon } from "../../hocs/create-icon.hoc";
import { DeviceMobileSpeakerBoldIcon } from "../bold/device-mobile-speaker-bold.icon";
import { DeviceMobileSpeakerDuotoneIcon } from "../duotone/device-mobile-speaker-duotone.icon";
import { DeviceMobileSpeakerFillIcon } from "../fill/device-mobile-speaker-fill.icon";
import { DeviceMobileSpeakerLightIcon } from "../light/device-mobile-speaker-light.icon";
import { DeviceMobileSpeakerRegularIcon } from "../regular/device-mobile-speaker-regular.icon";
import { DeviceMobileSpeakerThinIcon } from "../thin/device-mobile-speaker-thin.icon";

export const DeviceMobileSpeakerIcon = createIcon("DeviceMobileSpeaker", {
  bold: DeviceMobileSpeakerBoldIcon,
  duotone: DeviceMobileSpeakerDuotoneIcon,
  fill: DeviceMobileSpeakerFillIcon,
  light: DeviceMobileSpeakerLightIcon,
  regular: DeviceMobileSpeakerRegularIcon,
  thin: DeviceMobileSpeakerThinIcon,
});
