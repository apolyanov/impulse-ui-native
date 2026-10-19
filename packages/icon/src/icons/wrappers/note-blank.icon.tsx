import { createIcon } from "../../hocs/create-icon.hoc";
import { NoteBlankBoldIcon } from "../bold/note-blank-bold.icon";
import { NoteBlankDuotoneIcon } from "../duotone/note-blank-duotone.icon";
import { NoteBlankFillIcon } from "../fill/note-blank-fill.icon";
import { NoteBlankLightIcon } from "../light/note-blank-light.icon";
import { NoteBlankRegularIcon } from "../regular/note-blank-regular.icon";
import { NoteBlankThinIcon } from "../thin/note-blank-thin.icon";

export const NoteBlankIcon = createIcon("NoteBlank", {
  bold: NoteBlankBoldIcon,
  duotone: NoteBlankDuotoneIcon,
  fill: NoteBlankFillIcon,
  light: NoteBlankLightIcon,
  regular: NoteBlankRegularIcon,
  thin: NoteBlankThinIcon,
});
