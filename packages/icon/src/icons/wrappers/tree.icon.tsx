import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TreeBoldIcon } from "../bold/tree-bold.icon";
import { TreeDuotoneIcon } from "../duotone/tree-duotone.icon";
import { TreeFillIcon } from "../fill/tree-fill.icon";
import { TreeLightIcon } from "../light/tree-light.icon";
import { TreeRegularIcon } from "../regular/tree-regular.icon";
import { TreeThinIcon } from "../thin/tree-thin.icon";

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
