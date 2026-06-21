import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LeafBoldIcon } from "../bold";
import { LeafDuotoneIcon } from "../duotone";
import { LeafFillIcon } from "../fill";
import { LeafLightIcon } from "../light";
import { LeafRegularIcon } from "../regular";
import { LeafThinIcon } from "../thin";

export const LeafIcon = memo(function Leaf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LeafBoldIcon,
      duotone: LeafDuotoneIcon,
      fill: LeafFillIcon,
      light: LeafLightIcon,
      regular: LeafRegularIcon,
      thin: LeafThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
