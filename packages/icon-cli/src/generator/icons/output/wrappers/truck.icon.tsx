import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TruckBoldIcon } from "../bold";
        import { TruckDuotoneIcon } from "../duotone";
        import { TruckFillIcon } from "../fill";
        import { TruckLightIcon } from "../light";
        import { TruckRegularIcon } from "../regular";
        import { TruckThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TruckIcon = memo(function Truck(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TruckBoldIcon,
            duotone: TruckDuotoneIcon,
            fill: TruckFillIcon,
            light: TruckLightIcon,
            regular: TruckRegularIcon,
            thin: TruckThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
