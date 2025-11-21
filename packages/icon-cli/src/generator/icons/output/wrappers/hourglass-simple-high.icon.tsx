import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HourglassSimpleHighBoldIcon } from "../bold";
        import { HourglassSimpleHighDuotoneIcon } from "../duotone";
        import { HourglassSimpleHighFillIcon } from "../fill";
        import { HourglassSimpleHighLightIcon } from "../light";
        import { HourglassSimpleHighRegularIcon } from "../regular";
        import { HourglassSimpleHighThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HourglassSimpleHighIcon = memo(function HourglassSimpleHigh(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HourglassSimpleHighBoldIcon,
            duotone: HourglassSimpleHighDuotoneIcon,
            fill: HourglassSimpleHighFillIcon,
            light: HourglassSimpleHighLightIcon,
            regular: HourglassSimpleHighRegularIcon,
            thin: HourglassSimpleHighThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
