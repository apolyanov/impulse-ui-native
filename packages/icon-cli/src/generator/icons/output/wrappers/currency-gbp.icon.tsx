import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CurrencyGbpBoldIcon } from "../bold";
        import { CurrencyGbpDuotoneIcon } from "../duotone";
        import { CurrencyGbpFillIcon } from "../fill";
        import { CurrencyGbpLightIcon } from "../light";
        import { CurrencyGbpRegularIcon } from "../regular";
        import { CurrencyGbpThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CurrencyGbpIcon = memo(function CurrencyGbp(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CurrencyGbpBoldIcon,
            duotone: CurrencyGbpDuotoneIcon,
            fill: CurrencyGbpFillIcon,
            light: CurrencyGbpLightIcon,
            regular: CurrencyGbpRegularIcon,
            thin: CurrencyGbpThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
