import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LeafBold } from "../bold";
import { LeafDuotone } from "../duotone";
import { LeafFill } from "../fill";
import { LeafLight } from "../light";
import { LeafRegular } from "../regular";
import { LeafThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Leaf = memo(function Leaf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LeafBold,
      duotone: LeafDuotone,
      fill: LeafFill,
      light: LeafLight,
      regular: LeafRegular,
      thin: LeafThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
