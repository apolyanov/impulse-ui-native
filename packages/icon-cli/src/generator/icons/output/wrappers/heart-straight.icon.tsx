import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HeartStraightBoldIcon } from "../bold";
        import { HeartStraightDuotoneIcon } from "../duotone";
        import { HeartStraightFillIcon } from "../fill";
        import { HeartStraightLightIcon } from "../light";
        import { HeartStraightRegularIcon } from "../regular";
        import { HeartStraightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HeartStraightIcon = memo(function HeartStraight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HeartStraightBoldIcon,
            duotone: HeartStraightDuotoneIcon,
            fill: HeartStraightFillIcon,
            light: HeartStraightLightIcon,
            regular: HeartStraightRegularIcon,
            thin: HeartStraightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
