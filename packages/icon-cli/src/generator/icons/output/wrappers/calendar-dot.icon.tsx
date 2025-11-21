import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CalendarDotBoldIcon } from "../bold";
        import { CalendarDotDuotoneIcon } from "../duotone";
        import { CalendarDotFillIcon } from "../fill";
        import { CalendarDotLightIcon } from "../light";
        import { CalendarDotRegularIcon } from "../regular";
        import { CalendarDotThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CalendarDotIcon = memo(function CalendarDot(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CalendarDotBoldIcon,
            duotone: CalendarDotDuotoneIcon,
            fill: CalendarDotFillIcon,
            light: CalendarDotLightIcon,
            regular: CalendarDotRegularIcon,
            thin: CalendarDotThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
