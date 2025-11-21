import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CalendarPlusBoldIcon } from "../bold";
        import { CalendarPlusDuotoneIcon } from "../duotone";
        import { CalendarPlusFillIcon } from "../fill";
        import { CalendarPlusLightIcon } from "../light";
        import { CalendarPlusRegularIcon } from "../regular";
        import { CalendarPlusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CalendarPlusIcon = memo(function CalendarPlus(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CalendarPlusBoldIcon,
            duotone: CalendarPlusDuotoneIcon,
            fill: CalendarPlusFillIcon,
            light: CalendarPlusLightIcon,
            regular: CalendarPlusRegularIcon,
            thin: CalendarPlusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
