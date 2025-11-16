import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ApproximateEqualsBold } from "../bold";
import { ApproximateEqualsDuotone } from "../duotone";
import { ApproximateEqualsFill } from "../fill";
import { ApproximateEqualsLight } from "../light";
import { ApproximateEqualsRegular } from "../regular";
import { ApproximateEqualsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ApproximateEquals = memo(function ApproximateEquals(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ApproximateEqualsBold,
      duotone: ApproximateEqualsDuotone,
      fill: ApproximateEqualsFill,
      light: ApproximateEqualsLight,
      regular: ApproximateEqualsRegular,
      thin: ApproximateEqualsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
