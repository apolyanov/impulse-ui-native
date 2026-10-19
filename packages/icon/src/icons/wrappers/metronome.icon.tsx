import { createIcon } from "../../hocs/create-icon.hoc";
import { MetronomeBoldIcon } from "../bold/metronome-bold.icon";
import { MetronomeDuotoneIcon } from "../duotone/metronome-duotone.icon";
import { MetronomeFillIcon } from "../fill/metronome-fill.icon";
import { MetronomeLightIcon } from "../light/metronome-light.icon";
import { MetronomeRegularIcon } from "../regular/metronome-regular.icon";
import { MetronomeThinIcon } from "../thin/metronome-thin.icon";

export const MetronomeIcon = createIcon("Metronome", {
  bold: MetronomeBoldIcon,
  duotone: MetronomeDuotoneIcon,
  fill: MetronomeFillIcon,
  light: MetronomeLightIcon,
  regular: MetronomeRegularIcon,
  thin: MetronomeThinIcon,
});
