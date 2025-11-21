import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DiamondsFourBoldIcon } from "../bold";
        import { DiamondsFourDuotoneIcon } from "../duotone";
        import { DiamondsFourFillIcon } from "../fill";
        import { DiamondsFourLightIcon } from "../light";
        import { DiamondsFourRegularIcon } from "../regular";
        import { DiamondsFourThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DiamondsFourIcon = memo(function DiamondsFour(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DiamondsFourBoldIcon,
            duotone: DiamondsFourDuotoneIcon,
            fill: DiamondsFourFillIcon,
            light: DiamondsFourLightIcon,
            regular: DiamondsFourRegularIcon,
            thin: DiamondsFourThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
