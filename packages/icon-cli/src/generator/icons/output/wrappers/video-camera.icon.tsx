import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { VideoCameraBoldIcon } from "../bold";
        import { VideoCameraDuotoneIcon } from "../duotone";
        import { VideoCameraFillIcon } from "../fill";
        import { VideoCameraLightIcon } from "../light";
        import { VideoCameraRegularIcon } from "../regular";
        import { VideoCameraThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const VideoCameraIcon = memo(function VideoCamera(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: VideoCameraBoldIcon,
            duotone: VideoCameraDuotoneIcon,
            fill: VideoCameraFillIcon,
            light: VideoCameraLightIcon,
            regular: VideoCameraRegularIcon,
            thin: VideoCameraThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
