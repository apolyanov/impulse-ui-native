import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BatteryVerticalLowBoldIcon } from "../bold";
        import { BatteryVerticalLowDuotoneIcon } from "../duotone";
        import { BatteryVerticalLowFillIcon } from "../fill";
        import { BatteryVerticalLowLightIcon } from "../light";
        import { BatteryVerticalLowRegularIcon } from "../regular";
        import { BatteryVerticalLowThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BatteryVerticalLowIcon = memo(function BatteryVerticalLow(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BatteryVerticalLowBoldIcon,
            duotone: BatteryVerticalLowDuotoneIcon,
            fill: BatteryVerticalLowFillIcon,
            light: BatteryVerticalLowLightIcon,
            regular: BatteryVerticalLowRegularIcon,
            thin: BatteryVerticalLowThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
