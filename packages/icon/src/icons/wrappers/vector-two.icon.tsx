import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VectorTwoBoldIcon } from "../bold";
import { VectorTwoDuotoneIcon } from "../duotone";
import { VectorTwoFillIcon } from "../fill";
import { VectorTwoLightIcon } from "../light";
import { VectorTwoRegularIcon } from "../regular";
import { VectorTwoThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
