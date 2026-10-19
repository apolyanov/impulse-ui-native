import { createIcon } from "../../hocs/create-icon.hoc";
import { MusicNoteSimpleBoldIcon } from "../bold/music-note-simple-bold.icon";
import { MusicNoteSimpleDuotoneIcon } from "../duotone/music-note-simple-duotone.icon";
import { MusicNoteSimpleFillIcon } from "../fill/music-note-simple-fill.icon";
import { MusicNoteSimpleLightIcon } from "../light/music-note-simple-light.icon";
import { MusicNoteSimpleRegularIcon } from "../regular/music-note-simple-regular.icon";
import { MusicNoteSimpleThinIcon } from "../thin/music-note-simple-thin.icon";

export const MusicNoteSimpleIcon = createIcon("MusicNoteSimple", {
  bold: MusicNoteSimpleBoldIcon,
  duotone: MusicNoteSimpleDuotoneIcon,
  fill: MusicNoteSimpleFillIcon,
  light: MusicNoteSimpleLightIcon,
  regular: MusicNoteSimpleRegularIcon,
  thin: MusicNoteSimpleThinIcon,
});
