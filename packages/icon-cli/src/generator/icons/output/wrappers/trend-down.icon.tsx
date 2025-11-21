import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TrendDownBoldIcon } from "../bold";
        import { TrendDownDuotoneIcon } from "../duotone";
        import { TrendDownFillIcon } from "../fill";
        import { TrendDownLightIcon } from "../light";
        import { TrendDownRegularIcon } from "../regular";
        import { TrendDownThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TrendDownIcon = memo(function TrendDown(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TrendDownBoldIcon,
            duotone: TrendDownDuotoneIcon,
            fill: TrendDownFillIcon,
            light: TrendDownLightIcon,
            regular: TrendDownRegularIcon,
            thin: TrendDownThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
