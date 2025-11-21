import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MapTrifoldBoldIcon } from "../bold";
        import { MapTrifoldDuotoneIcon } from "../duotone";
        import { MapTrifoldFillIcon } from "../fill";
        import { MapTrifoldLightIcon } from "../light";
        import { MapTrifoldRegularIcon } from "../regular";
        import { MapTrifoldThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MapTrifoldIcon = memo(function MapTrifold(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MapTrifoldBoldIcon,
            duotone: MapTrifoldDuotoneIcon,
            fill: MapTrifoldFillIcon,
            light: MapTrifoldLightIcon,
            regular: MapTrifoldRegularIcon,
            thin: MapTrifoldThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
