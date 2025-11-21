import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { ShapesBoldIcon } from "../bold";
        import { ShapesDuotoneIcon } from "../duotone";
        import { ShapesFillIcon } from "../fill";
        import { ShapesLightIcon } from "../light";
        import { ShapesRegularIcon } from "../regular";
        import { ShapesThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const ShapesIcon = memo(function Shapes(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: ShapesBoldIcon,
            duotone: ShapesDuotoneIcon,
            fill: ShapesFillIcon,
            light: ShapesLightIcon,
            regular: ShapesRegularIcon,
            thin: ShapesThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
