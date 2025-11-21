import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MouseMiddleClickBoldIcon } from "../bold";
        import { MouseMiddleClickDuotoneIcon } from "../duotone";
        import { MouseMiddleClickFillIcon } from "../fill";
        import { MouseMiddleClickLightIcon } from "../light";
        import { MouseMiddleClickRegularIcon } from "../regular";
        import { MouseMiddleClickThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MouseMiddleClickIcon = memo(function MouseMiddleClick(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MouseMiddleClickBoldIcon,
            duotone: MouseMiddleClickDuotoneIcon,
            fill: MouseMiddleClickFillIcon,
            light: MouseMiddleClickLightIcon,
            regular: MouseMiddleClickRegularIcon,
            thin: MouseMiddleClickThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
