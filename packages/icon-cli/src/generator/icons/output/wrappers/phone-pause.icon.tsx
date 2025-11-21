import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PhonePauseBoldIcon } from "../bold";
        import { PhonePauseDuotoneIcon } from "../duotone";
        import { PhonePauseFillIcon } from "../fill";
        import { PhonePauseLightIcon } from "../light";
        import { PhonePauseRegularIcon } from "../regular";
        import { PhonePauseThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PhonePauseIcon = memo(function PhonePause(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PhonePauseBoldIcon,
            duotone: PhonePauseDuotoneIcon,
            fill: PhonePauseFillIcon,
            light: PhonePauseLightIcon,
            regular: PhonePauseRegularIcon,
            thin: PhonePauseThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
