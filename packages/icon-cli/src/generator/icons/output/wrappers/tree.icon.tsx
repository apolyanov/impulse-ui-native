import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TreeBoldIcon } from "../bold";
        import { TreeDuotoneIcon } from "../duotone";
        import { TreeFillIcon } from "../fill";
        import { TreeLightIcon } from "../light";
        import { TreeRegularIcon } from "../regular";
        import { TreeThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TreeIcon = memo(function Tree(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TreeBoldIcon,
            duotone: TreeDuotoneIcon,
            fill: TreeFillIcon,
            light: TreeLightIcon,
            regular: TreeRegularIcon,
            thin: TreeThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
