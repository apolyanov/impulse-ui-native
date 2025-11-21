import { ComponentType, memo, useMemo } from "react";
        import { SvgProps } from "react-native-svg";
        import { TreeViewBoldIcon } from "../bold";
        import { TreeViewDuotoneIcon } from "../duotone";
        import { TreeViewFillIcon } from "../fill";
        import { TreeViewLightIcon } from "../light";
        import { TreeViewRegularIcon } from "../regular";
        import { TreeViewThinIcon } from "../thin";
        import { IconVariant, IconWrapperProps } from "../../types";
        export const TreeViewIcon = memo(function TreeView(props: IconWrapperProps) {
        const Icon = useMemo(() => {
            const icons: Record<IconVariant, ComponentType<SvgProps>> = {
            bold: TreeViewBoldIcon,
            duotone: TreeViewDuotoneIcon,
            fill: TreeViewFillIcon,
            light: TreeViewLightIcon,
            regular: TreeViewRegularIcon,
            thin: TreeViewThinIcon,
            };
            return icons[props.variant ?? "regular"];
        }, [props.variant]);
        return <Icon {...props} />;
        });
