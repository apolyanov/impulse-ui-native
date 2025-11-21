import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { DiamondBoldIcon } from "../bold";
        import { DiamondDuotoneIcon } from "../duotone";
        import { DiamondFillIcon } from "../fill";
        import { DiamondLightIcon } from "../light";
        import { DiamondRegularIcon } from "../regular";
        import { DiamondThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const DiamondIcon = memo(function Diamond(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: DiamondBoldIcon,
            duotone: DiamondDuotoneIcon,
            fill: DiamondFillIcon,
            light: DiamondLightIcon,
            regular: DiamondRegularIcon,
            thin: DiamondThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
