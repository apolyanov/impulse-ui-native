import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SquareHalfBoldIcon } from "../bold";
        import { SquareHalfDuotoneIcon } from "../duotone";
        import { SquareHalfFillIcon } from "../fill";
        import { SquareHalfLightIcon } from "../light";
        import { SquareHalfRegularIcon } from "../regular";
        import { SquareHalfThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SquareHalfIcon = memo(function SquareHalf(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SquareHalfBoldIcon,
            duotone: SquareHalfDuotoneIcon,
            fill: SquareHalfFillIcon,
            light: SquareHalfLightIcon,
            regular: SquareHalfRegularIcon,
            thin: SquareHalfThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
