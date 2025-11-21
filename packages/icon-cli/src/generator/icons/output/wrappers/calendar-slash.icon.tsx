import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CalendarSlashBoldIcon } from "../bold";
        import { CalendarSlashDuotoneIcon } from "../duotone";
        import { CalendarSlashFillIcon } from "../fill";
        import { CalendarSlashLightIcon } from "../light";
        import { CalendarSlashRegularIcon } from "../regular";
        import { CalendarSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CalendarSlashIcon = memo(function CalendarSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CalendarSlashBoldIcon,
            duotone: CalendarSlashDuotoneIcon,
            fill: CalendarSlashFillIcon,
            light: CalendarSlashLightIcon,
            regular: CalendarSlashRegularIcon,
            thin: CalendarSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
