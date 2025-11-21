import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { HandSwipeLeftBoldIcon } from "../bold";
        import { HandSwipeLeftDuotoneIcon } from "../duotone";
        import { HandSwipeLeftFillIcon } from "../fill";
        import { HandSwipeLeftLightIcon } from "../light";
        import { HandSwipeLeftRegularIcon } from "../regular";
        import { HandSwipeLeftThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const HandSwipeLeftIcon = memo(function HandSwipeLeft(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: HandSwipeLeftBoldIcon,
            duotone: HandSwipeLeftDuotoneIcon,
            fill: HandSwipeLeftFillIcon,
            light: HandSwipeLeftLightIcon,
            regular: HandSwipeLeftRegularIcon,
            thin: HandSwipeLeftThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
