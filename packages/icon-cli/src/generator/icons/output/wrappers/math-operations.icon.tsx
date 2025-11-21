import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MathOperationsBoldIcon } from "../bold";
        import { MathOperationsDuotoneIcon } from "../duotone";
        import { MathOperationsFillIcon } from "../fill";
        import { MathOperationsLightIcon } from "../light";
        import { MathOperationsRegularIcon } from "../regular";
        import { MathOperationsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MathOperationsIcon = memo(function MathOperations(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MathOperationsBoldIcon,
            duotone: MathOperationsDuotoneIcon,
            fill: MathOperationsFillIcon,
            light: MathOperationsLightIcon,
            regular: MathOperationsRegularIcon,
            thin: MathOperationsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
