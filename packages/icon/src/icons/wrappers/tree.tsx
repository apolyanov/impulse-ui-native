import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TreeBold } from "../bold";
import { TreeDuotone } from "../duotone";
import { TreeFill } from "../fill";
import { TreeLight } from "../light";
import { TreeRegular } from "../regular";
import { TreeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Tree = memo(function Tree(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TreeBold,
      duotone: TreeDuotone,
      fill: TreeFill,
      light: TreeLight,
      regular: TreeRegular,
      thin: TreeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
