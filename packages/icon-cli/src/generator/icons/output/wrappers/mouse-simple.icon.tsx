import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { MouseSimpleBoldIcon } from "../bold";
        import { MouseSimpleDuotoneIcon } from "../duotone";
        import { MouseSimpleFillIcon } from "../fill";
        import { MouseSimpleLightIcon } from "../light";
        import { MouseSimpleRegularIcon } from "../regular";
        import { MouseSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const MouseSimpleIcon = memo(function MouseSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: MouseSimpleBoldIcon,
            duotone: MouseSimpleDuotoneIcon,
            fill: MouseSimpleFillIcon,
            light: MouseSimpleLightIcon,
            regular: MouseSimpleRegularIcon,
            thin: MouseSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
