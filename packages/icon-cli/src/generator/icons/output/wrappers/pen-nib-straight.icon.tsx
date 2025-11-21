import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PenNibStraightBoldIcon } from "../bold";
        import { PenNibStraightDuotoneIcon } from "../duotone";
        import { PenNibStraightFillIcon } from "../fill";
        import { PenNibStraightLightIcon } from "../light";
        import { PenNibStraightRegularIcon } from "../regular";
        import { PenNibStraightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PenNibStraightIcon = memo(function PenNibStraight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PenNibStraightBoldIcon,
            duotone: PenNibStraightDuotoneIcon,
            fill: PenNibStraightFillIcon,
            light: PenNibStraightLightIcon,
            regular: PenNibStraightRegularIcon,
            thin: PenNibStraightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
