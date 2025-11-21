import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ChartBarBoldIcon } from "../bold";
        import { ChartBarDuotoneIcon } from "../duotone";
        import { ChartBarFillIcon } from "../fill";
        import { ChartBarLightIcon } from "../light";
        import { ChartBarRegularIcon } from "../regular";
        import { ChartBarThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ChartBarIcon = memo(function ChartBar(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ChartBarBoldIcon,
            duotone: ChartBarDuotoneIcon,
            fill: ChartBarFillIcon,
            light: ChartBarLightIcon,
            regular: ChartBarRegularIcon,
            thin: ChartBarThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
