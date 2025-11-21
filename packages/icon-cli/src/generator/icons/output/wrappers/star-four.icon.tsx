import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { StarFourBoldIcon } from "../bold";
        import { StarFourDuotoneIcon } from "../duotone";
        import { StarFourFillIcon } from "../fill";
        import { StarFourLightIcon } from "../light";
        import { StarFourRegularIcon } from "../regular";
        import { StarFourThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const StarFourIcon = memo(function StarFour(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: StarFourBoldIcon,
            duotone: StarFourDuotoneIcon,
            fill: StarFourFillIcon,
            light: StarFourLightIcon,
            regular: StarFourRegularIcon,
            thin: StarFourThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
