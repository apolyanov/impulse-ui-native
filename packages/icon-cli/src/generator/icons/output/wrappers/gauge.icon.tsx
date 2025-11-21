import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GaugeBoldIcon } from "../bold";
        import { GaugeDuotoneIcon } from "../duotone";
        import { GaugeFillIcon } from "../fill";
        import { GaugeLightIcon } from "../light";
        import { GaugeRegularIcon } from "../regular";
        import { GaugeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GaugeIcon = memo(function Gauge(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GaugeBoldIcon,
            duotone: GaugeDuotoneIcon,
            fill: GaugeFillIcon,
            light: GaugeLightIcon,
            regular: GaugeRegularIcon,
            thin: GaugeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
