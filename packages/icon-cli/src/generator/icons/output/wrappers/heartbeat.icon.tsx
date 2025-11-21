import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HeartbeatBoldIcon } from "../bold";
        import { HeartbeatDuotoneIcon } from "../duotone";
        import { HeartbeatFillIcon } from "../fill";
        import { HeartbeatLightIcon } from "../light";
        import { HeartbeatRegularIcon } from "../regular";
        import { HeartbeatThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HeartbeatIcon = memo(function Heartbeat(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HeartbeatBoldIcon,
            duotone: HeartbeatDuotoneIcon,
            fill: HeartbeatFillIcon,
            light: HeartbeatLightIcon,
            regular: HeartbeatRegularIcon,
            thin: HeartbeatThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
