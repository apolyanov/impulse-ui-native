import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DeviceMobileSlashBoldIcon } from "../bold";
        import { DeviceMobileSlashDuotoneIcon } from "../duotone";
        import { DeviceMobileSlashFillIcon } from "../fill";
        import { DeviceMobileSlashLightIcon } from "../light";
        import { DeviceMobileSlashRegularIcon } from "../regular";
        import { DeviceMobileSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DeviceMobileSlashIcon = memo(function DeviceMobileSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DeviceMobileSlashBoldIcon,
            duotone: DeviceMobileSlashDuotoneIcon,
            fill: DeviceMobileSlashFillIcon,
            light: DeviceMobileSlashLightIcon,
            regular: DeviceMobileSlashRegularIcon,
            thin: DeviceMobileSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
