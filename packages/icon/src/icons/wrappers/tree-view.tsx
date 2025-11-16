import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TreeViewBold } from "../bold";
import { TreeViewDuotone } from "../duotone";
import { TreeViewFill } from "../fill";
import { TreeViewLight } from "../light";
import { TreeViewRegular } from "../regular";
import { TreeViewThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TreeView = memo(function TreeView(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TreeViewBold,
      duotone: TreeViewDuotone,
      fill: TreeViewFill,
      light: TreeViewLight,
      regular: TreeViewRegular,
      thin: TreeViewThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
