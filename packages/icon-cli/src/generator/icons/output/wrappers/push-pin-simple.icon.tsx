import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { PushPinSimpleBoldIcon } from "../bold";
        import { PushPinSimpleDuotoneIcon } from "../duotone";
        import { PushPinSimpleFillIcon } from "../fill";
        import { PushPinSimpleLightIcon } from "../light";
        import { PushPinSimpleRegularIcon } from "../regular";
        import { PushPinSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const PushPinSimpleIcon = memo(function PushPinSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: PushPinSimpleBoldIcon,
            duotone: PushPinSimpleDuotoneIcon,
            fill: PushPinSimpleFillIcon,
            light: PushPinSimpleLightIcon,
            regular: PushPinSimpleRegularIcon,
            thin: PushPinSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
