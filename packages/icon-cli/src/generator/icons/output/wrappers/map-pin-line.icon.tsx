import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MapPinLineBoldIcon } from "../bold";
        import { MapPinLineDuotoneIcon } from "../duotone";
        import { MapPinLineFillIcon } from "../fill";
        import { MapPinLineLightIcon } from "../light";
        import { MapPinLineRegularIcon } from "../regular";
        import { MapPinLineThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MapPinLineIcon = memo(function MapPinLine(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MapPinLineBoldIcon,
            duotone: MapPinLineDuotoneIcon,
            fill: MapPinLineFillIcon,
            light: MapPinLineLightIcon,
            regular: MapPinLineRegularIcon,
            thin: MapPinLineThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
