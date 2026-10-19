import { createIcon } from "../../hocs/create-icon.hoc";
import { MusicNotesPlusBoldIcon } from "../bold/music-notes-plus-bold.icon";
import { MusicNotesPlusDuotoneIcon } from "../duotone/music-notes-plus-duotone.icon";
import { MusicNotesPlusFillIcon } from "../fill/music-notes-plus-fill.icon";
import { MusicNotesPlusLightIcon } from "../light/music-notes-plus-light.icon";
import { MusicNotesPlusRegularIcon } from "../regular/music-notes-plus-regular.icon";
import { MusicNotesPlusThinIcon } from "../thin/music-notes-plus-thin.icon";

export const MusicNotesPlusIcon = createIcon("MusicNotesPlus", {
  bold: MusicNotesPlusBoldIcon,
  duotone: MusicNotesPlusDuotoneIcon,
  fill: MusicNotesPlusFillIcon,
  light: MusicNotesPlusLightIcon,
  regular: MusicNotesPlusRegularIcon,
  thin: MusicNotesPlusThinIcon,
});
