import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HandCoinsBoldIcon } from "../bold";
        import { HandCoinsDuotoneIcon } from "../duotone";
        import { HandCoinsFillIcon } from "../fill";
        import { HandCoinsLightIcon } from "../light";
        import { HandCoinsRegularIcon } from "../regular";
        import { HandCoinsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HandCoinsIcon = memo(function HandCoins(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HandCoinsBoldIcon,
            duotone: HandCoinsDuotoneIcon,
            fill: HandCoinsFillIcon,
            light: HandCoinsLightIcon,
            regular: HandCoinsRegularIcon,
            thin: HandCoinsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
