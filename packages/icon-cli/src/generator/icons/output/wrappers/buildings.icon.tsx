import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BuildingsBoldIcon } from "../bold";
        import { BuildingsDuotoneIcon } from "../duotone";
        import { BuildingsFillIcon } from "../fill";
        import { BuildingsLightIcon } from "../light";
        import { BuildingsRegularIcon } from "../regular";
        import { BuildingsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BuildingsIcon = memo(function Buildings(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BuildingsBoldIcon,
            duotone: BuildingsDuotoneIcon,
            fill: BuildingsFillIcon,
            light: BuildingsLightIcon,
            regular: BuildingsRegularIcon,
            thin: BuildingsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
