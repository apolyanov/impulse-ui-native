import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CurrencyDollarSimpleBoldIcon } from "../bold";
        import { CurrencyDollarSimpleDuotoneIcon } from "../duotone";
        import { CurrencyDollarSimpleFillIcon } from "../fill";
        import { CurrencyDollarSimpleLightIcon } from "../light";
        import { CurrencyDollarSimpleRegularIcon } from "../regular";
        import { CurrencyDollarSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CurrencyDollarSimpleIcon = memo(function CurrencyDollarSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CurrencyDollarSimpleBoldIcon,
            duotone: CurrencyDollarSimpleDuotoneIcon,
            fill: CurrencyDollarSimpleFillIcon,
            light: CurrencyDollarSimpleLightIcon,
            regular: CurrencyDollarSimpleRegularIcon,
            thin: CurrencyDollarSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
