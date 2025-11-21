import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChartLineDownBoldIcon } from "../bold";
        import { ChartLineDownDuotoneIcon } from "../duotone";
        import { ChartLineDownFillIcon } from "../fill";
        import { ChartLineDownLightIcon } from "../light";
        import { ChartLineDownRegularIcon } from "../regular";
        import { ChartLineDownThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChartLineDownIcon = memo(function ChartLineDown(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChartLineDownBoldIcon,
            duotone: ChartLineDownDuotoneIcon,
            fill: ChartLineDownFillIcon,
            light: ChartLineDownLightIcon,
            regular: ChartLineDownRegularIcon,
            thin: ChartLineDownThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
