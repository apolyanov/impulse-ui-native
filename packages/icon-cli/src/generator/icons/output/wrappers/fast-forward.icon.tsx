import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FastForwardBoldIcon } from "../bold";
        import { FastForwardDuotoneIcon } from "../duotone";
        import { FastForwardFillIcon } from "../fill";
        import { FastForwardLightIcon } from "../light";
        import { FastForwardRegularIcon } from "../regular";
        import { FastForwardThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FastForwardIcon = memo(function FastForward(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FastForwardBoldIcon,
            duotone: FastForwardDuotoneIcon,
            fill: FastForwardFillIcon,
            light: FastForwardLightIcon,
            regular: FastForwardRegularIcon,
            thin: FastForwardThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
