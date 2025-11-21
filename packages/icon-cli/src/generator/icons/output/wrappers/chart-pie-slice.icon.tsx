import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChartPieSliceBoldIcon } from "../bold";
        import { ChartPieSliceDuotoneIcon } from "../duotone";
        import { ChartPieSliceFillIcon } from "../fill";
        import { ChartPieSliceLightIcon } from "../light";
        import { ChartPieSliceRegularIcon } from "../regular";
        import { ChartPieSliceThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChartPieSliceIcon = memo(function ChartPieSlice(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChartPieSliceBoldIcon,
            duotone: ChartPieSliceDuotoneIcon,
            fill: ChartPieSliceFillIcon,
            light: ChartPieSliceLightIcon,
            regular: ChartPieSliceRegularIcon,
            thin: ChartPieSliceThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
