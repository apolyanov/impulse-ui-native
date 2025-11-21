import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CurrencyJpyBoldIcon } from "../bold";
        import { CurrencyJpyDuotoneIcon } from "../duotone";
        import { CurrencyJpyFillIcon } from "../fill";
        import { CurrencyJpyLightIcon } from "../light";
        import { CurrencyJpyRegularIcon } from "../regular";
        import { CurrencyJpyThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CurrencyJpyIcon = memo(function CurrencyJpy(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CurrencyJpyBoldIcon,
            duotone: CurrencyJpyDuotoneIcon,
            fill: CurrencyJpyFillIcon,
            light: CurrencyJpyLightIcon,
            regular: CurrencyJpyRegularIcon,
            thin: CurrencyJpyThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
