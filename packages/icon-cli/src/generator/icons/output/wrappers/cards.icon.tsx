import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CardsBoldIcon } from "../bold";
        import { CardsDuotoneIcon } from "../duotone";
        import { CardsFillIcon } from "../fill";
        import { CardsLightIcon } from "../light";
        import { CardsRegularIcon } from "../regular";
        import { CardsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CardsIcon = memo(function Cards(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CardsBoldIcon,
            duotone: CardsDuotoneIcon,
            fill: CardsFillIcon,
            light: CardsLightIcon,
            regular: CardsRegularIcon,
            thin: CardsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
