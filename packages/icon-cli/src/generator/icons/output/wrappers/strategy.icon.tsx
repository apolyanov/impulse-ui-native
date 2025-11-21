import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { StrategyBoldIcon } from "../bold";
        import { StrategyDuotoneIcon } from "../duotone";
        import { StrategyFillIcon } from "../fill";
        import { StrategyLightIcon } from "../light";
        import { StrategyRegularIcon } from "../regular";
        import { StrategyThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const StrategyIcon = memo(function Strategy(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: StrategyBoldIcon,
            duotone: StrategyDuotoneIcon,
            fill: StrategyFillIcon,
            light: StrategyLightIcon,
            regular: StrategyRegularIcon,
            thin: StrategyThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
