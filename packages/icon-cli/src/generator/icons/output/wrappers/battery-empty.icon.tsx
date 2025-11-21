import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BatteryEmptyBoldIcon } from "../bold";
        import { BatteryEmptyDuotoneIcon } from "../duotone";
        import { BatteryEmptyFillIcon } from "../fill";
        import { BatteryEmptyLightIcon } from "../light";
        import { BatteryEmptyRegularIcon } from "../regular";
        import { BatteryEmptyThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BatteryEmptyIcon = memo(function BatteryEmpty(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BatteryEmptyBoldIcon,
            duotone: BatteryEmptyDuotoneIcon,
            fill: BatteryEmptyFillIcon,
            light: BatteryEmptyLightIcon,
            regular: BatteryEmptyRegularIcon,
            thin: BatteryEmptyThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
