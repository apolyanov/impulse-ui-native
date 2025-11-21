import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CalendarCheckBoldIcon } from "../bold";
        import { CalendarCheckDuotoneIcon } from "../duotone";
        import { CalendarCheckFillIcon } from "../fill";
        import { CalendarCheckLightIcon } from "../light";
        import { CalendarCheckRegularIcon } from "../regular";
        import { CalendarCheckThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CalendarCheckIcon = memo(function CalendarCheck(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CalendarCheckBoldIcon,
            duotone: CalendarCheckDuotoneIcon,
            fill: CalendarCheckFillIcon,
            light: CalendarCheckLightIcon,
            regular: CalendarCheckRegularIcon,
            thin: CalendarCheckThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
