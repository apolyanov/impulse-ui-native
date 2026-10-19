import { createIcon } from "../../hocs/create-icon.hoc";
import { BandaidsBoldIcon } from "../bold/bandaids-bold.icon";
import { BandaidsDuotoneIcon } from "../duotone/bandaids-duotone.icon";
import { BandaidsFillIcon } from "../fill/bandaids-fill.icon";
import { BandaidsLightIcon } from "../light/bandaids-light.icon";
import { BandaidsRegularIcon } from "../regular/bandaids-regular.icon";
import { BandaidsThinIcon } from "../thin/bandaids-thin.icon";

export const BandaidsIcon = createIcon("Bandaids", {
  bold: BandaidsBoldIcon,
  duotone: BandaidsDuotoneIcon,
  fill: BandaidsFillIcon,
  light: BandaidsLightIcon,
  regular: BandaidsRegularIcon,
  thin: BandaidsThinIcon,
});
