import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { WheelchairMotionBoldIcon } from "../bold";
        import { WheelchairMotionDuotoneIcon } from "../duotone";
        import { WheelchairMotionFillIcon } from "../fill";
        import { WheelchairMotionLightIcon } from "../light";
        import { WheelchairMotionRegularIcon } from "../regular";
        import { WheelchairMotionThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const WheelchairMotionIcon = memo(function WheelchairMotion(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: WheelchairMotionBoldIcon,
            duotone: WheelchairMotionDuotoneIcon,
            fill: WheelchairMotionFillIcon,
            light: WheelchairMotionLightIcon,
            regular: WheelchairMotionRegularIcon,
            thin: WheelchairMotionThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
