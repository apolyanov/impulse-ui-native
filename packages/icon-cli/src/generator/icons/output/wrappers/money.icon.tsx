import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MoneyBoldIcon } from "../bold";
        import { MoneyDuotoneIcon } from "../duotone";
        import { MoneyFillIcon } from "../fill";
        import { MoneyLightIcon } from "../light";
        import { MoneyRegularIcon } from "../regular";
        import { MoneyThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MoneyIcon = memo(function Money(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MoneyBoldIcon,
            duotone: MoneyDuotoneIcon,
            fill: MoneyFillIcon,
            light: MoneyLightIcon,
            regular: MoneyRegularIcon,
            thin: MoneyThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
