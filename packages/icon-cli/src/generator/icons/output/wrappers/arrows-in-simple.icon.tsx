import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ArrowsInSimpleBoldIcon } from "../bold";
        import { ArrowsInSimpleDuotoneIcon } from "../duotone";
        import { ArrowsInSimpleFillIcon } from "../fill";
        import { ArrowsInSimpleLightIcon } from "../light";
        import { ArrowsInSimpleRegularIcon } from "../regular";
        import { ArrowsInSimpleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ArrowsInSimpleIcon = memo(function ArrowsInSimple(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ArrowsInSimpleBoldIcon,
            duotone: ArrowsInSimpleDuotoneIcon,
            fill: ArrowsInSimpleFillIcon,
            light: ArrowsInSimpleLightIcon,
            regular: ArrowsInSimpleRegularIcon,
            thin: ArrowsInSimpleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
