import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BluetoothSlashBoldIcon } from "../bold";
        import { BluetoothSlashDuotoneIcon } from "../duotone";
        import { BluetoothSlashFillIcon } from "../fill";
        import { BluetoothSlashLightIcon } from "../light";
        import { BluetoothSlashRegularIcon } from "../regular";
        import { BluetoothSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BluetoothSlashIcon = memo(function BluetoothSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BluetoothSlashBoldIcon,
            duotone: BluetoothSlashDuotoneIcon,
            fill: BluetoothSlashFillIcon,
            light: BluetoothSlashLightIcon,
            regular: BluetoothSlashRegularIcon,
            thin: BluetoothSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
