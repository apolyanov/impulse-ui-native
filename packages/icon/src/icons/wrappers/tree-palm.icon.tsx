import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TreePalmBoldIcon } from "../bold/tree-palm-bold.icon";
import { TreePalmDuotoneIcon } from "../duotone/tree-palm-duotone.icon";
import { TreePalmFillIcon } from "../fill/tree-palm-fill.icon";
import { TreePalmLightIcon } from "../light/tree-palm-light.icon";
import { TreePalmRegularIcon } from "../regular/tree-palm-regular.icon";
import { TreePalmThinIcon } from "../thin/tree-palm-thin.icon";

export const TreePalmIcon = memo(function TreePalm(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TreePalmBoldIcon,
      duotone: TreePalmDuotoneIcon,
      fill: TreePalmFillIcon,
      light: TreePalmLightIcon,
      regular: TreePalmRegularIcon,
      thin: TreePalmThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
