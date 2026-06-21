import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ApproximateEqualsBoldIcon } from "../bold";
import { ApproximateEqualsDuotoneIcon } from "../duotone";
import { ApproximateEqualsFillIcon } from "../fill";
import { ApproximateEqualsLightIcon } from "../light";
import { ApproximateEqualsRegularIcon } from "../regular";
import { ApproximateEqualsThinIcon } from "../thin";

export const ApproximateEqualsIcon = memo(function ApproximateEquals(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ApproximateEqualsBoldIcon,
      duotone: ApproximateEqualsDuotoneIcon,
      fill: ApproximateEqualsFillIcon,
      light: ApproximateEqualsLightIcon,
      regular: ApproximateEqualsRegularIcon,
      thin: ApproximateEqualsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
