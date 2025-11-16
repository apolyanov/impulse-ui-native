import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UnionBold } from "../bold";
import { UnionDuotone } from "../duotone";
import { UnionFill } from "../fill";
import { UnionLight } from "../light";
import { UnionRegular } from "../regular";
import { UnionThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Union = memo(function Union(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UnionBold,
      duotone: UnionDuotone,
      fill: UnionFill,
      light: UnionLight,
      regular: UnionRegular,
      thin: UnionThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
