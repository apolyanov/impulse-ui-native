import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { BasketballBoldIcon } from "../bold";
        import { BasketballDuotoneIcon } from "../duotone";
        import { BasketballFillIcon } from "../fill";
        import { BasketballLightIcon } from "../light";
        import { BasketballRegularIcon } from "../regular";
        import { BasketballThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const BasketballIcon = memo(function Basketball(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: BasketballBoldIcon,
            duotone: BasketballDuotoneIcon,
            fill: BasketballFillIcon,
            light: BasketballLightIcon,
            regular: BasketballRegularIcon,
            thin: BasketballThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
