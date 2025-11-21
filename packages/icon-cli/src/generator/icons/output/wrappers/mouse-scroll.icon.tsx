import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MouseScrollBoldIcon } from "../bold";
        import { MouseScrollDuotoneIcon } from "../duotone";
        import { MouseScrollFillIcon } from "../fill";
        import { MouseScrollLightIcon } from "../light";
        import { MouseScrollRegularIcon } from "../regular";
        import { MouseScrollThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MouseScrollIcon = memo(function MouseScroll(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MouseScrollBoldIcon,
            duotone: MouseScrollDuotoneIcon,
            fill: MouseScrollFillIcon,
            light: MouseScrollLightIcon,
            regular: MouseScrollRegularIcon,
            thin: MouseScrollThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
