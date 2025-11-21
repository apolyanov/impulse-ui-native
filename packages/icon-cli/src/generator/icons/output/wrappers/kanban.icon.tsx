import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { KanbanBoldIcon } from "../bold";
        import { KanbanDuotoneIcon } from "../duotone";
        import { KanbanFillIcon } from "../fill";
        import { KanbanLightIcon } from "../light";
        import { KanbanRegularIcon } from "../regular";
        import { KanbanThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
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
