import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { SkipForwardBoldIcon } from "../bold";
        import { SkipForwardDuotoneIcon } from "../duotone";
        import { SkipForwardFillIcon } from "../fill";
        import { SkipForwardLightIcon } from "../light";
        import { SkipForwardRegularIcon } from "../regular";
        import { SkipForwardThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const SkipForwardIcon = memo(function SkipForward(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: SkipForwardBoldIcon,
            duotone: SkipForwardDuotoneIcon,
            fill: SkipForwardFillIcon,
            light: SkipForwardLightIcon,
            regular: SkipForwardRegularIcon,
            thin: SkipForwardThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
