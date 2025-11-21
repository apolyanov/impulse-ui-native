import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ControlBoldIcon } from "../bold";
        import { ControlDuotoneIcon } from "../duotone";
        import { ControlFillIcon } from "../fill";
        import { ControlLightIcon } from "../light";
        import { ControlRegularIcon } from "../regular";
        import { ControlThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ControlIcon = memo(function Control(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ControlBoldIcon,
            duotone: ControlDuotoneIcon,
            fill: ControlFillIcon,
            light: ControlLightIcon,
            regular: ControlRegularIcon,
            thin: ControlThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
