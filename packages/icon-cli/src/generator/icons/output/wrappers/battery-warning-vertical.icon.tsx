import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BatteryWarningVerticalBoldIcon } from "../bold";
        import { BatteryWarningVerticalDuotoneIcon } from "../duotone";
        import { BatteryWarningVerticalFillIcon } from "../fill";
        import { BatteryWarningVerticalLightIcon } from "../light";
        import { BatteryWarningVerticalRegularIcon } from "../regular";
        import { BatteryWarningVerticalThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BatteryWarningVerticalIcon = memo(function BatteryWarningVertical(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BatteryWarningVerticalBoldIcon,
            duotone: BatteryWarningVerticalDuotoneIcon,
            fill: BatteryWarningVerticalFillIcon,
            light: BatteryWarningVerticalLightIcon,
            regular: BatteryWarningVerticalRegularIcon,
            thin: BatteryWarningVerticalThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
