import { createIcon } from "../../hocs/create-icon.hoc";
import { NotebookBoldIcon } from "../bold/notebook-bold.icon";
import { NotebookDuotoneIcon } from "../duotone/notebook-duotone.icon";
import { NotebookFillIcon } from "../fill/notebook-fill.icon";
import { NotebookLightIcon } from "../light/notebook-light.icon";
import { NotebookRegularIcon } from "../regular/notebook-regular.icon";
import { NotebookThinIcon } from "../thin/notebook-thin.icon";

export const NotebookIcon = createIcon("Notebook", {
  bold: NotebookBoldIcon,
  duotone: NotebookDuotoneIcon,
  fill: NotebookFillIcon,
  light: NotebookLightIcon,
  regular: NotebookRegularIcon,
  thin: NotebookThinIcon,
});
