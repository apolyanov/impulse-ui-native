import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { UnionBoldIcon } from "../bold/union-bold.icon";
import { UnionDuotoneIcon } from "../duotone/union-duotone.icon";
import { UnionFillIcon } from "../fill/union-fill.icon";
import { UnionLightIcon } from "../light/union-light.icon";
import { UnionRegularIcon } from "../regular/union-regular.icon";
import { UnionThinIcon } from "../thin/union-thin.icon";

export const UnionIcon = memo(function Union(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UnionBoldIcon,
      duotone: UnionDuotoneIcon,
      fill: UnionFillIcon,
      light: UnionLightIcon,
      regular: UnionRegularIcon,
      thin: UnionThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
