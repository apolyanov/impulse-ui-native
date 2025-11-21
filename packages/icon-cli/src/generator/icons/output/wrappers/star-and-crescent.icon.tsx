import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { StarAndCrescentBoldIcon } from "../bold";
        import { StarAndCrescentDuotoneIcon } from "../duotone";
        import { StarAndCrescentFillIcon } from "../fill";
        import { StarAndCrescentLightIcon } from "../light";
        import { StarAndCrescentRegularIcon } from "../regular";
        import { StarAndCrescentThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const StarAndCrescentIcon = memo(function StarAndCrescent(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: StarAndCrescentBoldIcon,
            duotone: StarAndCrescentDuotoneIcon,
            fill: StarAndCrescentFillIcon,
            light: StarAndCrescentLightIcon,
            regular: StarAndCrescentRegularIcon,
            thin: StarAndCrescentThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
