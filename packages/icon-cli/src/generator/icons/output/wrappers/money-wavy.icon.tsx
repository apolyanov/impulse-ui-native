import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MoneyWavyBoldIcon } from "../bold";
        import { MoneyWavyDuotoneIcon } from "../duotone";
        import { MoneyWavyFillIcon } from "../fill";
        import { MoneyWavyLightIcon } from "../light";
        import { MoneyWavyRegularIcon } from "../regular";
        import { MoneyWavyThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MoneyWavyIcon = memo(function MoneyWavy(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MoneyWavyBoldIcon,
            duotone: MoneyWavyDuotoneIcon,
            fill: MoneyWavyFillIcon,
            light: MoneyWavyLightIcon,
            regular: MoneyWavyRegularIcon,
            thin: MoneyWavyThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
