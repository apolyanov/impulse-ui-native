import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { NetworkXBoldIcon } from "../bold";
        import { NetworkXDuotoneIcon } from "../duotone";
        import { NetworkXFillIcon } from "../fill";
        import { NetworkXLightIcon } from "../light";
        import { NetworkXRegularIcon } from "../regular";
        import { NetworkXThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const NetworkXIcon = memo(function NetworkX(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: NetworkXBoldIcon,
            duotone: NetworkXDuotoneIcon,
            fill: NetworkXFillIcon,
            light: NetworkXLightIcon,
            regular: NetworkXRegularIcon,
            thin: NetworkXThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
