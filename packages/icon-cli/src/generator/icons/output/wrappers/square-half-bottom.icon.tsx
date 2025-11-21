import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SquareHalfBottomBoldIcon } from "../bold";
        import { SquareHalfBottomDuotoneIcon } from "../duotone";
        import { SquareHalfBottomFillIcon } from "../fill";
        import { SquareHalfBottomLightIcon } from "../light";
        import { SquareHalfBottomRegularIcon } from "../regular";
        import { SquareHalfBottomThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SquareHalfBottomIcon = memo(function SquareHalfBottom(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SquareHalfBottomBoldIcon,
            duotone: SquareHalfBottomDuotoneIcon,
            fill: SquareHalfBottomFillIcon,
            light: SquareHalfBottomLightIcon,
            regular: SquareHalfBottomRegularIcon,
            thin: SquareHalfBottomThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
