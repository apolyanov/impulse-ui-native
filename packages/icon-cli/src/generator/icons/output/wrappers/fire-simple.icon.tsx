import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { FireSimpleBoldIcon } from "../bold";
        import { FireSimpleDuotoneIcon } from "../duotone";
        import { FireSimpleFillIcon } from "../fill";
        import { FireSimpleLightIcon } from "../light";
        import { FireSimpleRegularIcon } from "../regular";
        import { FireSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const FireSimpleIcon = memo(function FireSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: FireSimpleBoldIcon,
            duotone: FireSimpleDuotoneIcon,
            fill: FireSimpleFillIcon,
            light: FireSimpleLightIcon,
            regular: FireSimpleRegularIcon,
            thin: FireSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
