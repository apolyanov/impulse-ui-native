import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MapPinSimpleAreaBoldIcon } from "../bold";
        import { MapPinSimpleAreaDuotoneIcon } from "../duotone";
        import { MapPinSimpleAreaFillIcon } from "../fill";
        import { MapPinSimpleAreaLightIcon } from "../light";
        import { MapPinSimpleAreaRegularIcon } from "../regular";
        import { MapPinSimpleAreaThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MapPinSimpleAreaIcon = memo(function MapPinSimpleArea(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MapPinSimpleAreaBoldIcon,
            duotone: MapPinSimpleAreaDuotoneIcon,
            fill: MapPinSimpleAreaFillIcon,
            light: MapPinSimpleAreaLightIcon,
            regular: MapPinSimpleAreaRegularIcon,
            thin: MapPinSimpleAreaThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
