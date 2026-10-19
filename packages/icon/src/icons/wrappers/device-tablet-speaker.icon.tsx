import { createIcon } from "../../hocs/create-icon.hoc";
import { DeviceTabletSpeakerBoldIcon } from "../bold/device-tablet-speaker-bold.icon";
import { DeviceTabletSpeakerDuotoneIcon } from "../duotone/device-tablet-speaker-duotone.icon";
import { DeviceTabletSpeakerFillIcon } from "../fill/device-tablet-speaker-fill.icon";
import { DeviceTabletSpeakerLightIcon } from "../light/device-tablet-speaker-light.icon";
import { DeviceTabletSpeakerRegularIcon } from "../regular/device-tablet-speaker-regular.icon";
import { DeviceTabletSpeakerThinIcon } from "../thin/device-tablet-speaker-thin.icon";

export const DeviceTabletSpeakerIcon = createIcon("DeviceTabletSpeaker", {
  bold: DeviceTabletSpeakerBoldIcon,
  duotone: DeviceTabletSpeakerDuotoneIcon,
  fill: DeviceTabletSpeakerFillIcon,
  light: DeviceTabletSpeakerLightIcon,
  regular: DeviceTabletSpeakerRegularIcon,
  thin: DeviceTabletSpeakerThinIcon,
});
