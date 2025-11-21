import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChartLineUpBoldIcon } from "../bold";
        import { ChartLineUpDuotoneIcon } from "../duotone";
        import { ChartLineUpFillIcon } from "../fill";
        import { ChartLineUpLightIcon } from "../light";
        import { ChartLineUpRegularIcon } from "../regular";
        import { ChartLineUpThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChartLineUpIcon = memo(function ChartLineUp(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChartLineUpBoldIcon,
            duotone: ChartLineUpDuotoneIcon,
            fill: ChartLineUpFillIcon,
            light: ChartLineUpLightIcon,
            regular: ChartLineUpRegularIcon,
            thin: ChartLineUpThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
