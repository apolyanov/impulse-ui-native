import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { StackSimpleBoldIcon } from "../bold";
        import { StackSimpleDuotoneIcon } from "../duotone";
        import { StackSimpleFillIcon } from "../fill";
        import { StackSimpleLightIcon } from "../light";
        import { StackSimpleRegularIcon } from "../regular";
        import { StackSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const StackSimpleIcon = memo(function StackSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: StackSimpleBoldIcon,
            duotone: StackSimpleDuotoneIcon,
            fill: StackSimpleFillIcon,
            light: StackSimpleLightIcon,
            regular: StackSimpleRegularIcon,
            thin: StackSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
