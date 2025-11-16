import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { EqualsBold } from "../bold";
import { EqualsDuotone } from "../duotone";
import { EqualsFill } from "../fill";
import { EqualsLight } from "../light";
import { EqualsRegular } from "../regular";
import { EqualsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Equals = memo(function Equals(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EqualsBold,
      duotone: EqualsDuotone,
      fill: EqualsFill,
      light: EqualsLight,
      regular: EqualsRegular,
      thin: EqualsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
