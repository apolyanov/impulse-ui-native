import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TreePalmBold } from "../bold";
import { TreePalmDuotone } from "../duotone";
import { TreePalmFill } from "../fill";
import { TreePalmLight } from "../light";
import { TreePalmRegular } from "../regular";
import { TreePalmThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TreePalm = memo(function TreePalm(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TreePalmBold,
      duotone: TreePalmDuotone,
      fill: TreePalmFill,
      light: TreePalmLight,
      regular: TreePalmRegular,
      thin: TreePalmThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
