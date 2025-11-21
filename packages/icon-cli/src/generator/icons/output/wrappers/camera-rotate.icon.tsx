import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CameraRotateBoldIcon } from "../bold";
        import { CameraRotateDuotoneIcon } from "../duotone";
        import { CameraRotateFillIcon } from "../fill";
        import { CameraRotateLightIcon } from "../light";
        import { CameraRotateRegularIcon } from "../regular";
        import { CameraRotateThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CameraRotateIcon = memo(function CameraRotate(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CameraRotateBoldIcon,
            duotone: CameraRotateDuotoneIcon,
            fill: CameraRotateFillIcon,
            light: CameraRotateLightIcon,
            regular: CameraRotateRegularIcon,
            thin: CameraRotateThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
