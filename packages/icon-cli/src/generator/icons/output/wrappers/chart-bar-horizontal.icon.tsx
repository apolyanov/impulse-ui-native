import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChartBarHorizontalBoldIcon } from "../bold";
        import { ChartBarHorizontalDuotoneIcon } from "../duotone";
        import { ChartBarHorizontalFillIcon } from "../fill";
        import { ChartBarHorizontalLightIcon } from "../light";
        import { ChartBarHorizontalRegularIcon } from "../regular";
        import { ChartBarHorizontalThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChartBarHorizontalIcon = memo(function ChartBarHorizontal(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChartBarHorizontalBoldIcon,
            duotone: ChartBarHorizontalDuotoneIcon,
            fill: ChartBarHorizontalFillIcon,
            light: ChartBarHorizontalLightIcon,
            regular: ChartBarHorizontalRegularIcon,
            thin: ChartBarHorizontalThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
