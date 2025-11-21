import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DeviceTabletCameraBoldIcon } from "../bold";
        import { DeviceTabletCameraDuotoneIcon } from "../duotone";
        import { DeviceTabletCameraFillIcon } from "../fill";
        import { DeviceTabletCameraLightIcon } from "../light";
        import { DeviceTabletCameraRegularIcon } from "../regular";
        import { DeviceTabletCameraThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DeviceTabletCameraIcon = memo(function DeviceTabletCamera(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DeviceTabletCameraBoldIcon,
            duotone: DeviceTabletCameraDuotoneIcon,
            fill: DeviceTabletCameraFillIcon,
            light: DeviceTabletCameraLightIcon,
            regular: DeviceTabletCameraRegularIcon,
            thin: DeviceTabletCameraThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
