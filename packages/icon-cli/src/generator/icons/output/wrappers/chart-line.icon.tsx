import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChartLineBoldIcon } from "../bold";
        import { ChartLineDuotoneIcon } from "../duotone";
        import { ChartLineFillIcon } from "../fill";
        import { ChartLineLightIcon } from "../light";
        import { ChartLineRegularIcon } from "../regular";
        import { ChartLineThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChartLineIcon = memo(function ChartLine(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChartLineBoldIcon,
            duotone: ChartLineDuotoneIcon,
            fill: ChartLineFillIcon,
            light: ChartLineLightIcon,
            regular: ChartLineRegularIcon,
            thin: ChartLineThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
