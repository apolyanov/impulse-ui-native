import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MagnetStraightBoldIcon } from "../bold";
        import { MagnetStraightDuotoneIcon } from "../duotone";
        import { MagnetStraightFillIcon } from "../fill";
        import { MagnetStraightLightIcon } from "../light";
        import { MagnetStraightRegularIcon } from "../regular";
        import { MagnetStraightThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MagnetStraightIcon = memo(function MagnetStraight(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MagnetStraightBoldIcon,
            duotone: MagnetStraightDuotoneIcon,
            fill: MagnetStraightFillIcon,
            light: MagnetStraightLightIcon,
            regular: MagnetStraightRegularIcon,
            thin: MagnetStraightThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
