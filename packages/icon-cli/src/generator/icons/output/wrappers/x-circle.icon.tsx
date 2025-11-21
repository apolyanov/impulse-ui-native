import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { XCircleBoldIcon } from "../bold";
        import { XCircleDuotoneIcon } from "../duotone";
        import { XCircleFillIcon } from "../fill";
        import { XCircleLightIcon } from "../light";
        import { XCircleRegularIcon } from "../regular";
        import { XCircleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const XCircleIcon = memo(function XCircle(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: XCircleBoldIcon,
            duotone: XCircleDuotoneIcon,
            fill: XCircleFillIcon,
            light: XCircleLightIcon,
            regular: XCircleRegularIcon,
            thin: XCircleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
