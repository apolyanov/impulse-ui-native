import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { StarHalfBoldIcon } from "../bold";
        import { StarHalfDuotoneIcon } from "../duotone";
        import { StarHalfFillIcon } from "../fill";
        import { StarHalfLightIcon } from "../light";
        import { StarHalfRegularIcon } from "../regular";
        import { StarHalfThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const StarHalfIcon = memo(function StarHalf(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: StarHalfBoldIcon,
            duotone: StarHalfDuotoneIcon,
            fill: StarHalfFillIcon,
            light: StarHalfLightIcon,
            regular: StarHalfRegularIcon,
            thin: StarHalfThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
