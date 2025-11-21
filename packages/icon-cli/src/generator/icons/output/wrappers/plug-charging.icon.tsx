import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PlugChargingBoldIcon } from "../bold";
        import { PlugChargingDuotoneIcon } from "../duotone";
        import { PlugChargingFillIcon } from "../fill";
        import { PlugChargingLightIcon } from "../light";
        import { PlugChargingRegularIcon } from "../regular";
        import { PlugChargingThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PlugChargingIcon = memo(function PlugCharging(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PlugChargingBoldIcon,
            duotone: PlugChargingDuotoneIcon,
            fill: PlugChargingFillIcon,
            light: PlugChargingLightIcon,
            regular: PlugChargingRegularIcon,
            thin: PlugChargingThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
