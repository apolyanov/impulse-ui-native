import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TriangleBoldIcon } from "../bold";
        import { TriangleDuotoneIcon } from "../duotone";
        import { TriangleFillIcon } from "../fill";
        import { TriangleLightIcon } from "../light";
        import { TriangleRegularIcon } from "../regular";
        import { TriangleThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TriangleIcon = memo(function Triangle(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TriangleBoldIcon,
            duotone: TriangleDuotoneIcon,
            fill: TriangleFillIcon,
            light: TriangleLightIcon,
            regular: TriangleRegularIcon,
            thin: TriangleThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
