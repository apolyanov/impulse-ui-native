import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CoinBoldIcon } from "../bold";
        import { CoinDuotoneIcon } from "../duotone";
        import { CoinFillIcon } from "../fill";
        import { CoinLightIcon } from "../light";
        import { CoinRegularIcon } from "../regular";
        import { CoinThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CoinIcon = memo(function Coin(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CoinBoldIcon,
            duotone: CoinDuotoneIcon,
            fill: CoinFillIcon,
            light: CoinLightIcon,
            regular: CoinRegularIcon,
            thin: CoinThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
