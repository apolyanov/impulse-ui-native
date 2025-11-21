import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CalculatorBoldIcon } from "../bold";
        import { CalculatorDuotoneIcon } from "../duotone";
        import { CalculatorFillIcon } from "../fill";
        import { CalculatorLightIcon } from "../light";
        import { CalculatorRegularIcon } from "../regular";
        import { CalculatorThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CalculatorIcon = memo(function Calculator(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CalculatorBoldIcon,
            duotone: CalculatorDuotoneIcon,
            fill: CalculatorFillIcon,
            light: CalculatorLightIcon,
            regular: CalculatorRegularIcon,
            thin: CalculatorThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
