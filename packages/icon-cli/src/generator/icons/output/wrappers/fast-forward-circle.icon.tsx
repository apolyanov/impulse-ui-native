import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FastForwardCircleBoldIcon } from "../bold";
        import { FastForwardCircleDuotoneIcon } from "../duotone";
        import { FastForwardCircleFillIcon } from "../fill";
        import { FastForwardCircleLightIcon } from "../light";
        import { FastForwardCircleRegularIcon } from "../regular";
        import { FastForwardCircleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FastForwardCircleIcon = memo(function FastForwardCircle(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FastForwardCircleBoldIcon,
            duotone: FastForwardCircleDuotoneIcon,
            fill: FastForwardCircleFillIcon,
            light: FastForwardCircleLightIcon,
            regular: FastForwardCircleRegularIcon,
            thin: FastForwardCircleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
