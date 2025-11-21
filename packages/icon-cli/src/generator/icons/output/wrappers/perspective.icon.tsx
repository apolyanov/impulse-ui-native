import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PerspectiveBoldIcon } from "../bold";
        import { PerspectiveDuotoneIcon } from "../duotone";
        import { PerspectiveFillIcon } from "../fill";
        import { PerspectiveLightIcon } from "../light";
        import { PerspectiveRegularIcon } from "../regular";
        import { PerspectiveThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PerspectiveIcon = memo(function Perspective(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PerspectiveBoldIcon,
            duotone: PerspectiveDuotoneIcon,
            fill: PerspectiveFillIcon,
            light: PerspectiveLightIcon,
            regular: PerspectiveRegularIcon,
            thin: PerspectiveThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
