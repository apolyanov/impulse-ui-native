import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PlanetBoldIcon } from "../bold";
        import { PlanetDuotoneIcon } from "../duotone";
        import { PlanetFillIcon } from "../fill";
        import { PlanetLightIcon } from "../light";
        import { PlanetRegularIcon } from "../regular";
        import { PlanetThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PlanetIcon = memo(function Planet(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PlanetBoldIcon,
            duotone: PlanetDuotoneIcon,
            fill: PlanetFillIcon,
            light: PlanetLightIcon,
            regular: PlanetRegularIcon,
            thin: PlanetThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
