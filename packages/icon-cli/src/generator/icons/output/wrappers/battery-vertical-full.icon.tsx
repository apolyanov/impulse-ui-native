import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BatteryVerticalFullBoldIcon } from "../bold";
        import { BatteryVerticalFullDuotoneIcon } from "../duotone";
        import { BatteryVerticalFullFillIcon } from "../fill";
        import { BatteryVerticalFullLightIcon } from "../light";
        import { BatteryVerticalFullRegularIcon } from "../regular";
        import { BatteryVerticalFullThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BatteryVerticalFullIcon = memo(function BatteryVerticalFull(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BatteryVerticalFullBoldIcon,
            duotone: BatteryVerticalFullDuotoneIcon,
            fill: BatteryVerticalFullFillIcon,
            light: BatteryVerticalFullLightIcon,
            regular: BatteryVerticalFullRegularIcon,
            thin: BatteryVerticalFullThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
