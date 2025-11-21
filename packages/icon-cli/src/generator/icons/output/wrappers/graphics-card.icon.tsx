import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GraphicsCardBoldIcon } from "../bold";
        import { GraphicsCardDuotoneIcon } from "../duotone";
        import { GraphicsCardFillIcon } from "../fill";
        import { GraphicsCardLightIcon } from "../light";
        import { GraphicsCardRegularIcon } from "../regular";
        import { GraphicsCardThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GraphicsCardIcon = memo(function GraphicsCard(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GraphicsCardBoldIcon,
            duotone: GraphicsCardDuotoneIcon,
            fill: GraphicsCardFillIcon,
            light: GraphicsCardLightIcon,
            regular: GraphicsCardRegularIcon,
            thin: GraphicsCardThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
