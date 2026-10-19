import { createIcon } from "../../hocs/create-icon.hoc";
import { MusicNoteBoldIcon } from "../bold/music-note-bold.icon";
import { MusicNoteDuotoneIcon } from "../duotone/music-note-duotone.icon";
import { MusicNoteFillIcon } from "../fill/music-note-fill.icon";
import { MusicNoteLightIcon } from "../light/music-note-light.icon";
import { MusicNoteRegularIcon } from "../regular/music-note-regular.icon";
import { MusicNoteThinIcon } from "../thin/music-note-thin.icon";

export const MusicNoteIcon = createIcon("MusicNote", {
  bold: MusicNoteBoldIcon,
  duotone: MusicNoteDuotoneIcon,
  fill: MusicNoteFillIcon,
  light: MusicNoteLightIcon,
  regular: MusicNoteRegularIcon,
  thin: MusicNoteThinIcon,
});
