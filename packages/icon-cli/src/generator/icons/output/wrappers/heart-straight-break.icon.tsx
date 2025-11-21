import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HeartStraightBreakBoldIcon } from "../bold";
        import { HeartStraightBreakDuotoneIcon } from "../duotone";
        import { HeartStraightBreakFillIcon } from "../fill";
        import { HeartStraightBreakLightIcon } from "../light";
        import { HeartStraightBreakRegularIcon } from "../regular";
        import { HeartStraightBreakThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HeartStraightBreakIcon = memo(function HeartStraightBreak(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HeartStraightBreakBoldIcon,
            duotone: HeartStraightBreakDuotoneIcon,
            fill: HeartStraightBreakFillIcon,
            light: HeartStraightBreakLightIcon,
            regular: HeartStraightBreakRegularIcon,
            thin: HeartStraightBreakThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
