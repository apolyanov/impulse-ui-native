import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CurrencyNgnBoldIcon } from "../bold";
        import { CurrencyNgnDuotoneIcon } from "../duotone";
        import { CurrencyNgnFillIcon } from "../fill";
        import { CurrencyNgnLightIcon } from "../light";
        import { CurrencyNgnRegularIcon } from "../regular";
        import { CurrencyNgnThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CurrencyNgnIcon = memo(function CurrencyNgn(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CurrencyNgnBoldIcon,
            duotone: CurrencyNgnDuotoneIcon,
            fill: CurrencyNgnFillIcon,
            light: CurrencyNgnLightIcon,
            regular: CurrencyNgnRegularIcon,
            thin: CurrencyNgnThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
