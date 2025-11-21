import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CircuitryBoldIcon } from "../bold";
        import { CircuitryDuotoneIcon } from "../duotone";
        import { CircuitryFillIcon } from "../fill";
        import { CircuitryLightIcon } from "../light";
        import { CircuitryRegularIcon } from "../regular";
        import { CircuitryThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CircuitryIcon = memo(function Circuitry(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CircuitryBoldIcon,
            duotone: CircuitryDuotoneIcon,
            fill: CircuitryFillIcon,
            light: CircuitryLightIcon,
            regular: CircuitryRegularIcon,
            thin: CircuitryThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
