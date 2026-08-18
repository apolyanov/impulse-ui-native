import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VectorTwoBoldIcon } from "../bold/vector-two-bold.icon";
import { VectorTwoDuotoneIcon } from "../duotone/vector-two-duotone.icon";
import { VectorTwoFillIcon } from "../fill/vector-two-fill.icon";
import { VectorTwoLightIcon } from "../light/vector-two-light.icon";
import { VectorTwoRegularIcon } from "../regular/vector-two-regular.icon";
import { VectorTwoThinIcon } from "../thin/vector-two-thin.icon";

export const VectorTwoIcon = memo(function VectorTwo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VectorTwoBoldIcon,
      duotone: VectorTwoDuotoneIcon,
      fill: VectorTwoFillIcon,
      light: VectorTwoLightIcon,
      regular: VectorTwoRegularIcon,
      thin: VectorTwoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
