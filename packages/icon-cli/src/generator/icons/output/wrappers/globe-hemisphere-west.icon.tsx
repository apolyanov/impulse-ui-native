import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GlobeHemisphereWestBoldIcon } from "../bold";
        import { GlobeHemisphereWestDuotoneIcon } from "../duotone";
        import { GlobeHemisphereWestFillIcon } from "../fill";
        import { GlobeHemisphereWestLightIcon } from "../light";
        import { GlobeHemisphereWestRegularIcon } from "../regular";
        import { GlobeHemisphereWestThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GlobeHemisphereWestIcon = memo(function GlobeHemisphereWest(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GlobeHemisphereWestBoldIcon,
            duotone: GlobeHemisphereWestDuotoneIcon,
            fill: GlobeHemisphereWestFillIcon,
            light: GlobeHemisphereWestLightIcon,
            regular: GlobeHemisphereWestRegularIcon,
            thin: GlobeHemisphereWestThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
