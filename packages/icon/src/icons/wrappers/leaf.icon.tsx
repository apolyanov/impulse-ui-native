import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LeafBoldIcon } from "../bold/leaf-bold.icon";
import { LeafDuotoneIcon } from "../duotone/leaf-duotone.icon";
import { LeafFillIcon } from "../fill/leaf-fill.icon";
import { LeafLightIcon } from "../light/leaf-light.icon";
import { LeafRegularIcon } from "../regular/leaf-regular.icon";
import { LeafThinIcon } from "../thin/leaf-thin.icon";

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
