import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MapPinSimpleBoldIcon } from "../bold";
        import { MapPinSimpleDuotoneIcon } from "../duotone";
        import { MapPinSimpleFillIcon } from "../fill";
        import { MapPinSimpleLightIcon } from "../light";
        import { MapPinSimpleRegularIcon } from "../regular";
        import { MapPinSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MapPinSimpleIcon = memo(function MapPinSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MapPinSimpleBoldIcon,
            duotone: MapPinSimpleDuotoneIcon,
            fill: MapPinSimpleFillIcon,
            light: MapPinSimpleLightIcon,
            regular: MapPinSimpleRegularIcon,
            thin: MapPinSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
