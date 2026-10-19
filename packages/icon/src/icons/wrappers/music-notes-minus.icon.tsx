import { createIcon } from "../../hocs/create-icon.hoc";
import { MusicNotesMinusBoldIcon } from "../bold/music-notes-minus-bold.icon";
import { MusicNotesMinusDuotoneIcon } from "../duotone/music-notes-minus-duotone.icon";
import { MusicNotesMinusFillIcon } from "../fill/music-notes-minus-fill.icon";
import { MusicNotesMinusLightIcon } from "../light/music-notes-minus-light.icon";
import { MusicNotesMinusRegularIcon } from "../regular/music-notes-minus-regular.icon";
import { MusicNotesMinusThinIcon } from "../thin/music-notes-minus-thin.icon";

export const MusicNotesMinusIcon = createIcon("MusicNotesMinus", {
  bold: MusicNotesMinusBoldIcon,
  duotone: MusicNotesMinusDuotoneIcon,
  fill: MusicNotesMinusFillIcon,
  light: MusicNotesMinusLightIcon,
  regular: MusicNotesMinusRegularIcon,
  thin: MusicNotesMinusThinIcon,
});
