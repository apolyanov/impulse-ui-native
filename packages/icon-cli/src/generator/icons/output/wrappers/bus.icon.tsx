import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BusBoldIcon } from "../bold";
        import { BusDuotoneIcon } from "../duotone";
        import { BusFillIcon } from "../fill";
        import { BusLightIcon } from "../light";
        import { BusRegularIcon } from "../regular";
        import { BusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BusIcon = memo(function Bus(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BusBoldIcon,
            duotone: BusDuotoneIcon,
            fill: BusFillIcon,
            light: BusLightIcon,
            regular: BusRegularIcon,
            thin: BusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
