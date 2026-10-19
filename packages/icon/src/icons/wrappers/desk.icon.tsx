import { createIcon } from "../../hocs/create-icon.hoc";
import { DeskBoldIcon } from "../bold/desk-bold.icon";
import { DeskDuotoneIcon } from "../duotone/desk-duotone.icon";
import { DeskFillIcon } from "../fill/desk-fill.icon";
import { DeskLightIcon } from "../light/desk-light.icon";
import { DeskRegularIcon } from "../regular/desk-regular.icon";
import { DeskThinIcon } from "../thin/desk-thin.icon";

export const DeskIcon = createIcon("Desk", {
  bold: DeskBoldIcon,
  duotone: DeskDuotoneIcon,
  fill: DeskFillIcon,
  light: DeskLightIcon,
  regular: DeskRegularIcon,
  thin: DeskThinIcon,
});
