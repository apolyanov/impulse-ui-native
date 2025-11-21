import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CalendarStarBoldIcon } from "../bold";
        import { CalendarStarDuotoneIcon } from "../duotone";
        import { CalendarStarFillIcon } from "../fill";
        import { CalendarStarLightIcon } from "../light";
        import { CalendarStarRegularIcon } from "../regular";
        import { CalendarStarThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CalendarStarIcon = memo(function CalendarStar(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CalendarStarBoldIcon,
            duotone: CalendarStarDuotoneIcon,
            fill: CalendarStarFillIcon,
            light: CalendarStarLightIcon,
            regular: CalendarStarRegularIcon,
            thin: CalendarStarThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
