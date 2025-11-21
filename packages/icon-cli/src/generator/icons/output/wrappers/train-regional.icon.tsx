import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TrainRegionalBoldIcon } from "../bold";
        import { TrainRegionalDuotoneIcon } from "../duotone";
        import { TrainRegionalFillIcon } from "../fill";
        import { TrainRegionalLightIcon } from "../light";
        import { TrainRegionalRegularIcon } from "../regular";
        import { TrainRegionalThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TrainRegionalIcon = memo(function TrainRegional(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TrainRegionalBoldIcon,
            duotone: TrainRegionalDuotoneIcon,
            fill: TrainRegionalFillIcon,
            light: TrainRegionalLightIcon,
            regular: TrainRegionalRegularIcon,
            thin: TrainRegionalThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
