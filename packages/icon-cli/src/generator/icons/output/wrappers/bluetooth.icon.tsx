import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BluetoothBoldIcon } from "../bold";
        import { BluetoothDuotoneIcon } from "../duotone";
        import { BluetoothFillIcon } from "../fill";
        import { BluetoothLightIcon } from "../light";
        import { BluetoothRegularIcon } from "../regular";
        import { BluetoothThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BluetoothIcon = memo(function Bluetooth(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BluetoothBoldIcon,
            duotone: BluetoothDuotoneIcon,
            fill: BluetoothFillIcon,
            light: BluetoothLightIcon,
            regular: BluetoothRegularIcon,
            thin: BluetoothThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
