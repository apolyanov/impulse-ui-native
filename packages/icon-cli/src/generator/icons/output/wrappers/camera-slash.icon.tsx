import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CameraSlashBoldIcon } from "../bold";
        import { CameraSlashDuotoneIcon } from "../duotone";
        import { CameraSlashFillIcon } from "../fill";
        import { CameraSlashLightIcon } from "../light";
        import { CameraSlashRegularIcon } from "../regular";
        import { CameraSlashThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CameraSlashIcon = memo(function CameraSlash(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CameraSlashBoldIcon,
            duotone: CameraSlashDuotoneIcon,
            fill: CameraSlashFillIcon,
            light: CameraSlashLightIcon,
            regular: CameraSlashRegularIcon,
            thin: CameraSlashThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
