import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CameraBoldIcon } from "../bold";
        import { CameraDuotoneIcon } from "../duotone";
        import { CameraFillIcon } from "../fill";
        import { CameraLightIcon } from "../light";
        import { CameraRegularIcon } from "../regular";
        import { CameraThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CameraIcon = memo(function Camera(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CameraBoldIcon,
            duotone: CameraDuotoneIcon,
            fill: CameraFillIcon,
            light: CameraLightIcon,
            regular: CameraRegularIcon,
            thin: CameraThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
