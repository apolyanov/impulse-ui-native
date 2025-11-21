import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CurrencyEthBoldIcon } from "../bold";
        import { CurrencyEthDuotoneIcon } from "../duotone";
        import { CurrencyEthFillIcon } from "../fill";
        import { CurrencyEthLightIcon } from "../light";
        import { CurrencyEthRegularIcon } from "../regular";
        import { CurrencyEthThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CurrencyEthIcon = memo(function CurrencyEth(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CurrencyEthBoldIcon,
            duotone: CurrencyEthDuotoneIcon,
            fill: CurrencyEthFillIcon,
            light: CurrencyEthLightIcon,
            regular: CurrencyEthRegularIcon,
            thin: CurrencyEthThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
