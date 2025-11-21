import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { CrosshairSimpleBoldIcon } from "../bold";
        import { CrosshairSimpleDuotoneIcon } from "../duotone";
        import { CrosshairSimpleFillIcon } from "../fill";
        import { CrosshairSimpleLightIcon } from "../light";
        import { CrosshairSimpleRegularIcon } from "../regular";
        import { CrosshairSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const CrosshairSimpleIcon = memo(function CrosshairSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: CrosshairSimpleBoldIcon,
            duotone: CrosshairSimpleDuotoneIcon,
            fill: CrosshairSimpleFillIcon,
            light: CrosshairSimpleLightIcon,
            regular: CrosshairSimpleRegularIcon,
            thin: CrosshairSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
