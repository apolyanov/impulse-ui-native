import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CircleHalfTiltBoldIcon } from "../bold";
        import { CircleHalfTiltDuotoneIcon } from "../duotone";
        import { CircleHalfTiltFillIcon } from "../fill";
        import { CircleHalfTiltLightIcon } from "../light";
        import { CircleHalfTiltRegularIcon } from "../regular";
        import { CircleHalfTiltThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CircleHalfTiltIcon = memo(function CircleHalfTilt(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CircleHalfTiltBoldIcon,
            duotone: CircleHalfTiltDuotoneIcon,
            fill: CircleHalfTiltFillIcon,
            light: CircleHalfTiltLightIcon,
            regular: CircleHalfTiltRegularIcon,
            thin: CircleHalfTiltThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
