import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GlobeSimpleBoldIcon } from "../bold";
        import { GlobeSimpleDuotoneIcon } from "../duotone";
        import { GlobeSimpleFillIcon } from "../fill";
        import { GlobeSimpleLightIcon } from "../light";
        import { GlobeSimpleRegularIcon } from "../regular";
        import { GlobeSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GlobeSimpleIcon = memo(function GlobeSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GlobeSimpleBoldIcon,
            duotone: GlobeSimpleDuotoneIcon,
            fill: GlobeSimpleFillIcon,
            light: GlobeSimpleLightIcon,
            regular: GlobeSimpleRegularIcon,
            thin: GlobeSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
