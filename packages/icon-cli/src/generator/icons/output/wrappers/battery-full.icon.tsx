import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BatteryFullBoldIcon } from "../bold";
        import { BatteryFullDuotoneIcon } from "../duotone";
        import { BatteryFullFillIcon } from "../fill";
        import { BatteryFullLightIcon } from "../light";
        import { BatteryFullRegularIcon } from "../regular";
        import { BatteryFullThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BatteryFullIcon = memo(function BatteryFull(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BatteryFullBoldIcon,
            duotone: BatteryFullDuotoneIcon,
            fill: BatteryFullFillIcon,
            light: BatteryFullLightIcon,
            regular: BatteryFullRegularIcon,
            thin: BatteryFullThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
