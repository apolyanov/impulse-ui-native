import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ClockClockwiseBoldIcon } from "../bold";
        import { ClockClockwiseDuotoneIcon } from "../duotone";
        import { ClockClockwiseFillIcon } from "../fill";
        import { ClockClockwiseLightIcon } from "../light";
        import { ClockClockwiseRegularIcon } from "../regular";
        import { ClockClockwiseThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ClockClockwiseIcon = memo(function ClockClockwise(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ClockClockwiseBoldIcon,
            duotone: ClockClockwiseDuotoneIcon,
            fill: ClockClockwiseFillIcon,
            light: ClockClockwiseLightIcon,
            regular: ClockClockwiseRegularIcon,
            thin: ClockClockwiseThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
