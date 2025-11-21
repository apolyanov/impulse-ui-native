import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FireTruckBoldIcon } from "../bold";
        import { FireTruckDuotoneIcon } from "../duotone";
        import { FireTruckFillIcon } from "../fill";
        import { FireTruckLightIcon } from "../light";
        import { FireTruckRegularIcon } from "../regular";
        import { FireTruckThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FireTruckIcon = memo(function FireTruck(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FireTruckBoldIcon,
            duotone: FireTruckDuotoneIcon,
            fill: FireTruckFillIcon,
            light: FireTruckLightIcon,
            regular: FireTruckRegularIcon,
            thin: FireTruckThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
