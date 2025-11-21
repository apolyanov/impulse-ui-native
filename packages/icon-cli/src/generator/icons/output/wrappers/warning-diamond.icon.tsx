import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { WarningDiamondBoldIcon } from "../bold";
        import { WarningDiamondDuotoneIcon } from "../duotone";
        import { WarningDiamondFillIcon } from "../fill";
        import { WarningDiamondLightIcon } from "../light";
        import { WarningDiamondRegularIcon } from "../regular";
        import { WarningDiamondThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const WarningDiamondIcon = memo(function WarningDiamond(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: WarningDiamondBoldIcon,
            duotone: WarningDiamondDuotoneIcon,
            fill: WarningDiamondFillIcon,
            light: WarningDiamondLightIcon,
            regular: WarningDiamondRegularIcon,
            thin: WarningDiamondThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
