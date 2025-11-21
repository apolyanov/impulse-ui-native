import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowsOutSimpleBoldIcon } from "../bold";
        import { ArrowsOutSimpleDuotoneIcon } from "../duotone";
        import { ArrowsOutSimpleFillIcon } from "../fill";
        import { ArrowsOutSimpleLightIcon } from "../light";
        import { ArrowsOutSimpleRegularIcon } from "../regular";
        import { ArrowsOutSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowsOutSimpleIcon = memo(function ArrowsOutSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowsOutSimpleBoldIcon,
            duotone: ArrowsOutSimpleDuotoneIcon,
            fill: ArrowsOutSimpleFillIcon,
            light: ArrowsOutSimpleLightIcon,
            regular: ArrowsOutSimpleRegularIcon,
            thin: ArrowsOutSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
