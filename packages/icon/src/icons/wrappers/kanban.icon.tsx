import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { KanbanBoldIcon } from "../bold/kanban-bold.icon";
import { KanbanDuotoneIcon } from "../duotone/kanban-duotone.icon";
import { KanbanFillIcon } from "../fill/kanban-fill.icon";
import { KanbanLightIcon } from "../light/kanban-light.icon";
import { KanbanRegularIcon } from "../regular/kanban-regular.icon";
import { KanbanThinIcon } from "../thin/kanban-thin.icon";

export const KanbanIcon = memo(function Kanban(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: KanbanBoldIcon,
      duotone: KanbanDuotoneIcon,
      fill: KanbanFillIcon,
      light: KanbanLightIcon,
      regular: KanbanRegularIcon,
      thin: KanbanThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
