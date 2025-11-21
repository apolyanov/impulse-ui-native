import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CurrencyKrwBoldIcon } from "../bold";
        import { CurrencyKrwDuotoneIcon } from "../duotone";
        import { CurrencyKrwFillIcon } from "../fill";
        import { CurrencyKrwLightIcon } from "../light";
        import { CurrencyKrwRegularIcon } from "../regular";
        import { CurrencyKrwThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CurrencyKrwIcon = memo(function CurrencyKrw(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CurrencyKrwBoldIcon,
            duotone: CurrencyKrwDuotoneIcon,
            fill: CurrencyKrwFillIcon,
            light: CurrencyKrwLightIcon,
            regular: CurrencyKrwRegularIcon,
            thin: CurrencyKrwThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
