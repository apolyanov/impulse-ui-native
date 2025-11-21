import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GpsSlashBoldIcon } from "../bold";
        import { GpsSlashDuotoneIcon } from "../duotone";
        import { GpsSlashFillIcon } from "../fill";
        import { GpsSlashLightIcon } from "../light";
        import { GpsSlashRegularIcon } from "../regular";
        import { GpsSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GpsSlashIcon = memo(function GpsSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GpsSlashBoldIcon,
            duotone: GpsSlashDuotoneIcon,
            fill: GpsSlashFillIcon,
            light: GpsSlashLightIcon,
            regular: GpsSlashRegularIcon,
            thin: GpsSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
