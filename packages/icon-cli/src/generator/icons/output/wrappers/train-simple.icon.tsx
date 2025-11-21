import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TrainSimpleBoldIcon } from "../bold";
        import { TrainSimpleDuotoneIcon } from "../duotone";
        import { TrainSimpleFillIcon } from "../fill";
        import { TrainSimpleLightIcon } from "../light";
        import { TrainSimpleRegularIcon } from "../regular";
        import { TrainSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TrainSimpleIcon = memo(function TrainSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TrainSimpleBoldIcon,
            duotone: TrainSimpleDuotoneIcon,
            fill: TrainSimpleFillIcon,
            light: TrainSimpleLightIcon,
            regular: TrainSimpleRegularIcon,
            thin: TrainSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
