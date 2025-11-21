import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GlobeHemisphereEastBoldIcon } from "../bold";
        import { GlobeHemisphereEastDuotoneIcon } from "../duotone";
        import { GlobeHemisphereEastFillIcon } from "../fill";
        import { GlobeHemisphereEastLightIcon } from "../light";
        import { GlobeHemisphereEastRegularIcon } from "../regular";
        import { GlobeHemisphereEastThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GlobeHemisphereEastIcon = memo(function GlobeHemisphereEast(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GlobeHemisphereEastBoldIcon,
            duotone: GlobeHemisphereEastDuotoneIcon,
            fill: GlobeHemisphereEastFillIcon,
            light: GlobeHemisphereEastLightIcon,
            regular: GlobeHemisphereEastRegularIcon,
            thin: GlobeHemisphereEastThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
