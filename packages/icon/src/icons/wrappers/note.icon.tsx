import { createIcon } from "../../hocs/create-icon.hoc";
import { NoteBoldIcon } from "../bold/note-bold.icon";
import { NoteDuotoneIcon } from "../duotone/note-duotone.icon";
import { NoteFillIcon } from "../fill/note-fill.icon";
import { NoteLightIcon } from "../light/note-light.icon";
import { NoteRegularIcon } from "../regular/note-regular.icon";
import { NoteThinIcon } from "../thin/note-thin.icon";

export const NoteIcon = createIcon("Note", {
  bold: NoteBoldIcon,
  duotone: NoteDuotoneIcon,
  fill: NoteFillIcon,
  light: NoteLightIcon,
  regular: NoteRegularIcon,
  thin: NoteThinIcon,
});
