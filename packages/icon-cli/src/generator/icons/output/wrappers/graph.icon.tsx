import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { GraphBoldIcon } from "../bold";
        import { GraphDuotoneIcon } from "../duotone";
        import { GraphFillIcon } from "../fill";
        import { GraphLightIcon } from "../light";
        import { GraphRegularIcon } from "../regular";
        import { GraphThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const GraphIcon = memo(function Graph(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: GraphBoldIcon,
            duotone: GraphDuotoneIcon,
            fill: GraphFillIcon,
            light: GraphLightIcon,
            regular: GraphRegularIcon,
            thin: GraphThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
