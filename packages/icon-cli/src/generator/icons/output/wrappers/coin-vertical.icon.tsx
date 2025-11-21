import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CoinVerticalBoldIcon } from "../bold";
        import { CoinVerticalDuotoneIcon } from "../duotone";
        import { CoinVerticalFillIcon } from "../fill";
        import { CoinVerticalLightIcon } from "../light";
        import { CoinVerticalRegularIcon } from "../regular";
        import { CoinVerticalThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CoinVerticalIcon = memo(function CoinVertical(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CoinVerticalBoldIcon,
            duotone: CoinVerticalDuotoneIcon,
            fill: CoinVerticalFillIcon,
            light: CoinVerticalLightIcon,
            regular: CoinVerticalRegularIcon,
            thin: CoinVerticalThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
