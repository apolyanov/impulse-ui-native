import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MapPinSimpleLineBoldIcon } from "../bold";
        import { MapPinSimpleLineDuotoneIcon } from "../duotone";
        import { MapPinSimpleLineFillIcon } from "../fill";
        import { MapPinSimpleLineLightIcon } from "../light";
        import { MapPinSimpleLineRegularIcon } from "../regular";
        import { MapPinSimpleLineThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MapPinSimpleLineIcon = memo(function MapPinSimpleLine(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MapPinSimpleLineBoldIcon,
            duotone: MapPinSimpleLineDuotoneIcon,
            fill: MapPinSimpleLineFillIcon,
            light: MapPinSimpleLineLightIcon,
            regular: MapPinSimpleLineRegularIcon,
            thin: MapPinSimpleLineThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
