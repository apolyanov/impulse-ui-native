import { createIcon } from "../../hocs/create-icon.hoc";
import { MusicNotesBoldIcon } from "../bold/music-notes-bold.icon";
import { MusicNotesDuotoneIcon } from "../duotone/music-notes-duotone.icon";
import { MusicNotesFillIcon } from "../fill/music-notes-fill.icon";
import { MusicNotesLightIcon } from "../light/music-notes-light.icon";
import { MusicNotesRegularIcon } from "../regular/music-notes-regular.icon";
import { MusicNotesThinIcon } from "../thin/music-notes-thin.icon";

export const MusicNotesIcon = createIcon("MusicNotes", {
  bold: MusicNotesBoldIcon,
  duotone: MusicNotesDuotoneIcon,
  fill: MusicNotesFillIcon,
  light: MusicNotesLightIcon,
  regular: MusicNotesRegularIcon,
  thin: MusicNotesThinIcon,
});
