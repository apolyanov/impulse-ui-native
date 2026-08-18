import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TreeEvergreenBoldIcon } from "../bold/tree-evergreen-bold.icon";
import { TreeEvergreenDuotoneIcon } from "../duotone/tree-evergreen-duotone.icon";
import { TreeEvergreenFillIcon } from "../fill/tree-evergreen-fill.icon";
import { TreeEvergreenLightIcon } from "../light/tree-evergreen-light.icon";
import { TreeEvergreenRegularIcon } from "../regular/tree-evergreen-regular.icon";
import { TreeEvergreenThinIcon } from "../thin/tree-evergreen-thin.icon";

export const TreeEvergreenIcon = memo(function TreeEvergreen(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TreeEvergreenBoldIcon,
      duotone: TreeEvergreenDuotoneIcon,
      fill: TreeEvergreenFillIcon,
      light: TreeEvergreenLightIcon,
      regular: TreeEvergreenRegularIcon,
      thin: TreeEvergreenThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
