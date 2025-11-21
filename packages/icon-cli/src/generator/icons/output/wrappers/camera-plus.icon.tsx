import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CameraPlusBoldIcon } from "../bold";
        import { CameraPlusDuotoneIcon } from "../duotone";
        import { CameraPlusFillIcon } from "../fill";
        import { CameraPlusLightIcon } from "../light";
        import { CameraPlusRegularIcon } from "../regular";
        import { CameraPlusThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CameraPlusIcon = memo(function CameraPlus(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CameraPlusBoldIcon,
            duotone: CameraPlusDuotoneIcon,
            fill: CameraPlusFillIcon,
            light: CameraPlusLightIcon,
            regular: CameraPlusRegularIcon,
            thin: CameraPlusThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
