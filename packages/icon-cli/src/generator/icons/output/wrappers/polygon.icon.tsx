import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PolygonBoldIcon } from "../bold";
        import { PolygonDuotoneIcon } from "../duotone";
        import { PolygonFillIcon } from "../fill";
        import { PolygonLightIcon } from "../light";
        import { PolygonRegularIcon } from "../regular";
        import { PolygonThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PolygonIcon = memo(function Polygon(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PolygonBoldIcon,
            duotone: PolygonDuotoneIcon,
            fill: PolygonFillIcon,
            light: PolygonLightIcon,
            regular: PolygonRegularIcon,
            thin: PolygonThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
