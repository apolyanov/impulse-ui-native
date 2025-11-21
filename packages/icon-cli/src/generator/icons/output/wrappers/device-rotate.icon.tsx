import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DeviceRotateBoldIcon } from "../bold";
        import { DeviceRotateDuotoneIcon } from "../duotone";
        import { DeviceRotateFillIcon } from "../fill";
        import { DeviceRotateLightIcon } from "../light";
        import { DeviceRotateRegularIcon } from "../regular";
        import { DeviceRotateThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DeviceRotateIcon = memo(function DeviceRotate(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DeviceRotateBoldIcon,
            duotone: DeviceRotateDuotoneIcon,
            fill: DeviceRotateFillIcon,
            light: DeviceRotateLightIcon,
            regular: DeviceRotateRegularIcon,
            thin: DeviceRotateThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
