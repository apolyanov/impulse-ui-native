import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { AnchorSimpleBoldIcon } from "../bold";
        import { AnchorSimpleDuotoneIcon } from "../duotone";
        import { AnchorSimpleFillIcon } from "../fill";
        import { AnchorSimpleLightIcon } from "../light";
        import { AnchorSimpleRegularIcon } from "../regular";
        import { AnchorSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const AnchorSimpleIcon = memo(function AnchorSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: AnchorSimpleBoldIcon,
            duotone: AnchorSimpleDuotoneIcon,
            fill: AnchorSimpleFillIcon,
            light: AnchorSimpleLightIcon,
            regular: AnchorSimpleRegularIcon,
            thin: AnchorSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
