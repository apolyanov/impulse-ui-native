import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowCounterClockwiseBoldIcon } from "../bold";
        import { ArrowCounterClockwiseDuotoneIcon } from "../duotone";
        import { ArrowCounterClockwiseFillIcon } from "../fill";
        import { ArrowCounterClockwiseLightIcon } from "../light";
        import { ArrowCounterClockwiseRegularIcon } from "../regular";
        import { ArrowCounterClockwiseThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowCounterClockwiseIcon = memo(function ArrowCounterClockwise(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowCounterClockwiseBoldIcon,
            duotone: ArrowCounterClockwiseDuotoneIcon,
            fill: ArrowCounterClockwiseFillIcon,
            light: ArrowCounterClockwiseLightIcon,
            regular: ArrowCounterClockwiseRegularIcon,
            thin: ArrowCounterClockwiseThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
