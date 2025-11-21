import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { StopBoldIcon } from "../bold";
        import { StopDuotoneIcon } from "../duotone";
        import { StopFillIcon } from "../fill";
        import { StopLightIcon } from "../light";
        import { StopRegularIcon } from "../regular";
        import { StopThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const StopIcon = memo(function Stop(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: StopBoldIcon,
            duotone: StopDuotoneIcon,
            fill: StopFillIcon,
            light: StopLightIcon,
            regular: StopRegularIcon,
            thin: StopThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
