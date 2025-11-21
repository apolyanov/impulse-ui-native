import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CoinsBoldIcon } from "../bold";
        import { CoinsDuotoneIcon } from "../duotone";
        import { CoinsFillIcon } from "../fill";
        import { CoinsLightIcon } from "../light";
        import { CoinsRegularIcon } from "../regular";
        import { CoinsThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CoinsIcon = memo(function Coins(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CoinsBoldIcon,
            duotone: CoinsDuotoneIcon,
            fill: CoinsFillIcon,
            light: CoinsLightIcon,
            regular: CoinsRegularIcon,
            thin: CoinsThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
