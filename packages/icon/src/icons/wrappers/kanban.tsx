import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { KanbanBold } from "../bold";
import { KanbanDuotone } from "../duotone";
import { KanbanFill } from "../fill";
import { KanbanLight } from "../light";
import { KanbanRegular } from "../regular";
import { KanbanThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Kanban = memo(function Kanban(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: KanbanBold,
      duotone: KanbanDuotone,
      fill: KanbanFill,
      light: KanbanLight,
      regular: KanbanRegular,
      thin: KanbanThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
