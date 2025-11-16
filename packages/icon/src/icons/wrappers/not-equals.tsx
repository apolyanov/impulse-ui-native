import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NotEqualsBold } from "../bold";
import { NotEqualsDuotone } from "../duotone";
import { NotEqualsFill } from "../fill";
import { NotEqualsLight } from "../light";
import { NotEqualsRegular } from "../regular";
import { NotEqualsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NotEquals = memo(function NotEquals(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotEqualsBold,
      duotone: NotEqualsDuotone,
      fill: NotEqualsFill,
      light: NotEqualsLight,
      regular: NotEqualsRegular,
      thin: NotEqualsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
