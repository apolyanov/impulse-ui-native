import { createIcon } from "../../hocs/create-icon.hoc";
import { VirusBoldIcon } from "../bold/virus-bold.icon";
import { VirusDuotoneIcon } from "../duotone/virus-duotone.icon";
import { VirusFillIcon } from "../fill/virus-fill.icon";
import { VirusLightIcon } from "../light/virus-light.icon";
import { VirusRegularIcon } from "../regular/virus-regular.icon";
import { VirusThinIcon } from "../thin/virus-thin.icon";

export const VirusIcon = createIcon("Virus", {
  bold: VirusBoldIcon,
  duotone: VirusDuotoneIcon,
  fill: VirusFillIcon,
  light: VirusLightIcon,
  regular: VirusRegularIcon,
  thin: VirusThinIcon,
});
