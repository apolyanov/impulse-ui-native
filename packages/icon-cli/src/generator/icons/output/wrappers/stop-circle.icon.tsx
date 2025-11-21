import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { StopCircleBoldIcon } from "../bold";
        import { StopCircleDuotoneIcon } from "../duotone";
        import { StopCircleFillIcon } from "../fill";
        import { StopCircleLightIcon } from "../light";
        import { StopCircleRegularIcon } from "../regular";
        import { StopCircleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const StopCircleIcon = memo(function StopCircle(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: StopCircleBoldIcon,
            duotone: StopCircleDuotoneIcon,
            fill: StopCircleFillIcon,
            light: StopCircleLightIcon,
            regular: StopCircleRegularIcon,
            thin: StopCircleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
