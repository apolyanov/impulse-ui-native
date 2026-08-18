import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ApproximateEqualsBoldIcon } from "../bold/approximate-equals-bold.icon";
import { ApproximateEqualsDuotoneIcon } from "../duotone/approximate-equals-duotone.icon";
import { ApproximateEqualsFillIcon } from "../fill/approximate-equals-fill.icon";
import { ApproximateEqualsLightIcon } from "../light/approximate-equals-light.icon";
import { ApproximateEqualsRegularIcon } from "../regular/approximate-equals-regular.icon";
import { ApproximateEqualsThinIcon } from "../thin/approximate-equals-thin.icon";

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
