import { createIcon } from "../../hocs/create-icon.hoc";
import { NotePencilBoldIcon } from "../bold/note-pencil-bold.icon";
import { NotePencilDuotoneIcon } from "../duotone/note-pencil-duotone.icon";
import { NotePencilFillIcon } from "../fill/note-pencil-fill.icon";
import { NotePencilLightIcon } from "../light/note-pencil-light.icon";
import { NotePencilRegularIcon } from "../regular/note-pencil-regular.icon";
import { NotePencilThinIcon } from "../thin/note-pencil-thin.icon";

export const NotePencilIcon = createIcon("NotePencil", {
  bold: NotePencilBoldIcon,
  duotone: NotePencilDuotoneIcon,
  fill: NotePencilFillIcon,
  light: NotePencilLightIcon,
  regular: NotePencilRegularIcon,
  thin: NotePencilThinIcon,
});
