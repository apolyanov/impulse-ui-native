import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FunnelSimpleBoldIcon } from "../bold";
        import { FunnelSimpleDuotoneIcon } from "../duotone";
        import { FunnelSimpleFillIcon } from "../fill";
        import { FunnelSimpleLightIcon } from "../light";
        import { FunnelSimpleRegularIcon } from "../regular";
        import { FunnelSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FunnelSimpleIcon = memo(function FunnelSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FunnelSimpleBoldIcon,
            duotone: FunnelSimpleDuotoneIcon,
            fill: FunnelSimpleFillIcon,
            light: FunnelSimpleLightIcon,
            regular: FunnelSimpleRegularIcon,
            thin: FunnelSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
