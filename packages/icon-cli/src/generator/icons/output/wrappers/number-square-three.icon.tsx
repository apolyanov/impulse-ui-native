import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NumberSquareThreeBoldIcon } from "../bold";
        import { NumberSquareThreeDuotoneIcon } from "../duotone";
        import { NumberSquareThreeFillIcon } from "../fill";
        import { NumberSquareThreeLightIcon } from "../light";
        import { NumberSquareThreeRegularIcon } from "../regular";
        import { NumberSquareThreeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NumberSquareThreeIcon = memo(function NumberSquareThree(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NumberSquareThreeBoldIcon,
            duotone: NumberSquareThreeDuotoneIcon,
            fill: NumberSquareThreeFillIcon,
            light: NumberSquareThreeLightIcon,
            regular: NumberSquareThreeRegularIcon,
            thin: NumberSquareThreeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
