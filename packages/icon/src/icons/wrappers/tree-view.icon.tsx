import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TreeViewBoldIcon } from "../bold/tree-view-bold.icon";
import { TreeViewDuotoneIcon } from "../duotone/tree-view-duotone.icon";
import { TreeViewFillIcon } from "../fill/tree-view-fill.icon";
import { TreeViewLightIcon } from "../light/tree-view-light.icon";
import { TreeViewRegularIcon } from "../regular/tree-view-regular.icon";
import { TreeViewThinIcon } from "../thin/tree-view-thin.icon";

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
