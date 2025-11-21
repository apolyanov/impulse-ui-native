import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PauseBoldIcon } from "../bold";
        import { PauseDuotoneIcon } from "../duotone";
        import { PauseFillIcon } from "../fill";
        import { PauseLightIcon } from "../light";
        import { PauseRegularIcon } from "../regular";
        import { PauseThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PauseIcon = memo(function Pause(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PauseBoldIcon,
            duotone: PauseDuotoneIcon,
            fill: PauseFillIcon,
            light: PauseLightIcon,
            regular: PauseRegularIcon,
            thin: PauseThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
