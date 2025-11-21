import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CalendarDotsBoldIcon } from "../bold";
        import { CalendarDotsDuotoneIcon } from "../duotone";
        import { CalendarDotsFillIcon } from "../fill";
        import { CalendarDotsLightIcon } from "../light";
        import { CalendarDotsRegularIcon } from "../regular";
        import { CalendarDotsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CalendarDotsIcon = memo(function CalendarDots(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CalendarDotsBoldIcon,
            duotone: CalendarDotsDuotoneIcon,
            fill: CalendarDotsFillIcon,
            light: CalendarDotsLightIcon,
            regular: CalendarDotsRegularIcon,
            thin: CalendarDotsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
