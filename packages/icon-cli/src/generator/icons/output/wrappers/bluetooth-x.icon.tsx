import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BluetoothXBoldIcon } from "../bold";
        import { BluetoothXDuotoneIcon } from "../duotone";
        import { BluetoothXFillIcon } from "../fill";
        import { BluetoothXLightIcon } from "../light";
        import { BluetoothXRegularIcon } from "../regular";
        import { BluetoothXThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BluetoothXIcon = memo(function BluetoothX(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BluetoothXBoldIcon,
            duotone: BluetoothXDuotoneIcon,
            fill: BluetoothXFillIcon,
            light: BluetoothXLightIcon,
            regular: BluetoothXRegularIcon,
            thin: BluetoothXThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
