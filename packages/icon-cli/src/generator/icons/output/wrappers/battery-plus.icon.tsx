import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BatteryPlusBoldIcon } from "../bold";
        import { BatteryPlusDuotoneIcon } from "../duotone";
        import { BatteryPlusFillIcon } from "../fill";
        import { BatteryPlusLightIcon } from "../light";
        import { BatteryPlusRegularIcon } from "../regular";
        import { BatteryPlusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BatteryPlusIcon = memo(function BatteryPlus(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BatteryPlusBoldIcon,
            duotone: BatteryPlusDuotoneIcon,
            fill: BatteryPlusFillIcon,
            light: BatteryPlusLightIcon,
            regular: BatteryPlusRegularIcon,
            thin: BatteryPlusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
