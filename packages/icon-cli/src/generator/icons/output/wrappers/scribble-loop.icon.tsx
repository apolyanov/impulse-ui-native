import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ScribbleLoopBoldIcon } from "../bold";
        import { ScribbleLoopDuotoneIcon } from "../duotone";
        import { ScribbleLoopFillIcon } from "../fill";
        import { ScribbleLoopLightIcon } from "../light";
        import { ScribbleLoopRegularIcon } from "../regular";
        import { ScribbleLoopThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ScribbleLoopIcon = memo(function ScribbleLoop(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ScribbleLoopBoldIcon,
            duotone: ScribbleLoopDuotoneIcon,
            fill: ScribbleLoopFillIcon,
            light: ScribbleLoopLightIcon,
            regular: ScribbleLoopRegularIcon,
            thin: ScribbleLoopThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
