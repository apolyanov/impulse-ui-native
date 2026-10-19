import { createIcon } from "../../hocs/create-icon.hoc";
import { NotepadBoldIcon } from "../bold/notepad-bold.icon";
import { NotepadDuotoneIcon } from "../duotone/notepad-duotone.icon";
import { NotepadFillIcon } from "../fill/notepad-fill.icon";
import { NotepadLightIcon } from "../light/notepad-light.icon";
import { NotepadRegularIcon } from "../regular/notepad-regular.icon";
import { NotepadThinIcon } from "../thin/notepad-thin.icon";

export const NotepadIcon = createIcon("Notepad", {
  bold: NotepadBoldIcon,
  duotone: NotepadDuotoneIcon,
  fill: NotepadFillIcon,
  light: NotepadLightIcon,
  regular: NotepadRegularIcon,
  thin: NotepadThinIcon,
});
