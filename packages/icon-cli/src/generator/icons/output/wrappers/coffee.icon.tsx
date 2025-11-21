import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CoffeeBoldIcon } from "../bold";
        import { CoffeeDuotoneIcon } from "../duotone";
        import { CoffeeFillIcon } from "../fill";
        import { CoffeeLightIcon } from "../light";
        import { CoffeeRegularIcon } from "../regular";
        import { CoffeeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CoffeeIcon = memo(function Coffee(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CoffeeBoldIcon,
            duotone: CoffeeDuotoneIcon,
            fill: CoffeeFillIcon,
            light: CoffeeLightIcon,
            regular: CoffeeRegularIcon,
            thin: CoffeeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
