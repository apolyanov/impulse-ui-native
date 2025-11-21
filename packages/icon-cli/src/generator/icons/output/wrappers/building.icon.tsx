import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BuildingBoldIcon } from "../bold";
        import { BuildingDuotoneIcon } from "../duotone";
        import { BuildingFillIcon } from "../fill";
        import { BuildingLightIcon } from "../light";
        import { BuildingRegularIcon } from "../regular";
        import { BuildingThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BuildingIcon = memo(function Building(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BuildingBoldIcon,
            duotone: BuildingDuotoneIcon,
            fill: BuildingFillIcon,
            light: BuildingLightIcon,
            regular: BuildingRegularIcon,
            thin: BuildingThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
