import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChartDonutBoldIcon } from "../bold";
        import { ChartDonutDuotoneIcon } from "../duotone";
        import { ChartDonutFillIcon } from "../fill";
        import { ChartDonutLightIcon } from "../light";
        import { ChartDonutRegularIcon } from "../regular";
        import { ChartDonutThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChartDonutIcon = memo(function ChartDonut(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChartDonutBoldIcon,
            duotone: ChartDonutDuotoneIcon,
            fill: ChartDonutFillIcon,
            light: ChartDonutLightIcon,
            regular: ChartDonutRegularIcon,
            thin: ChartDonutThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
