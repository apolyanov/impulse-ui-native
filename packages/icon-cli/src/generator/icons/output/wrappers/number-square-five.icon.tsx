import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NumberSquareFiveBoldIcon } from "../bold";
        import { NumberSquareFiveDuotoneIcon } from "../duotone";
        import { NumberSquareFiveFillIcon } from "../fill";
        import { NumberSquareFiveLightIcon } from "../light";
        import { NumberSquareFiveRegularIcon } from "../regular";
        import { NumberSquareFiveThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NumberSquareFiveIcon = memo(function NumberSquareFive(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NumberSquareFiveBoldIcon,
            duotone: NumberSquareFiveDuotoneIcon,
            fill: NumberSquareFiveFillIcon,
            light: NumberSquareFiveLightIcon,
            regular: NumberSquareFiveRegularIcon,
            thin: NumberSquareFiveThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
