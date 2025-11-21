import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ShoppingCartBoldIcon } from "../bold";
        import { ShoppingCartDuotoneIcon } from "../duotone";
        import { ShoppingCartFillIcon } from "../fill";
        import { ShoppingCartLightIcon } from "../light";
        import { ShoppingCartRegularIcon } from "../regular";
        import { ShoppingCartThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ShoppingCartIcon = memo(function ShoppingCart(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ShoppingCartBoldIcon,
            duotone: ShoppingCartDuotoneIcon,
            fill: ShoppingCartFillIcon,
            light: ShoppingCartLightIcon,
            regular: ShoppingCartRegularIcon,
            thin: ShoppingCartThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
