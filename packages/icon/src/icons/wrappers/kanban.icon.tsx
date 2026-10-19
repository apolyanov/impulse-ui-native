import { createIcon } from "../../hocs/create-icon.hoc";
import { KanbanBoldIcon } from "../bold/kanban-bold.icon";
import { KanbanDuotoneIcon } from "../duotone/kanban-duotone.icon";
import { KanbanFillIcon } from "../fill/kanban-fill.icon";
import { KanbanLightIcon } from "../light/kanban-light.icon";
import { KanbanRegularIcon } from "../regular/kanban-regular.icon";
import { KanbanThinIcon } from "../thin/kanban-thin.icon";

export const KanbanIcon = createIcon("Kanban", {
  bold: KanbanBoldIcon,
  duotone: KanbanDuotoneIcon,
  fill: KanbanFillIcon,
  light: KanbanLightIcon,
  regular: KanbanRegularIcon,
  thin: KanbanThinIcon,
});
