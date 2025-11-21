import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CalendarMinusBoldIcon } from "../bold";
        import { CalendarMinusDuotoneIcon } from "../duotone";
        import { CalendarMinusFillIcon } from "../fill";
        import { CalendarMinusLightIcon } from "../light";
        import { CalendarMinusRegularIcon } from "../regular";
        import { CalendarMinusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CalendarMinusIcon = memo(function CalendarMinus(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CalendarMinusBoldIcon,
            duotone: CalendarMinusDuotoneIcon,
            fill: CalendarMinusFillIcon,
            light: CalendarMinusLightIcon,
            regular: CalendarMinusRegularIcon,
            thin: CalendarMinusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
