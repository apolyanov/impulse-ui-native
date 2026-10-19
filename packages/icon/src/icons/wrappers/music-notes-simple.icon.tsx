import { createIcon } from "../../hocs/create-icon.hoc";
import { MusicNotesSimpleBoldIcon } from "../bold/music-notes-simple-bold.icon";
import { MusicNotesSimpleDuotoneIcon } from "../duotone/music-notes-simple-duotone.icon";
import { MusicNotesSimpleFillIcon } from "../fill/music-notes-simple-fill.icon";
import { MusicNotesSimpleLightIcon } from "../light/music-notes-simple-light.icon";
import { MusicNotesSimpleRegularIcon } from "../regular/music-notes-simple-regular.icon";
import { MusicNotesSimpleThinIcon } from "../thin/music-notes-simple-thin.icon";

export const MusicNotesSimpleIcon = createIcon("MusicNotesSimple", {
  bold: MusicNotesSimpleBoldIcon,
  duotone: MusicNotesSimpleDuotoneIcon,
  fill: MusicNotesSimpleFillIcon,
  light: MusicNotesSimpleLightIcon,
  regular: MusicNotesSimpleRegularIcon,
  thin: MusicNotesSimpleThinIcon,
});
