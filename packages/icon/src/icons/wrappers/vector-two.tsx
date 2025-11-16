import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VectorTwoBold } from "../bold";
import { VectorTwoDuotone } from "../duotone";
import { VectorTwoFill } from "../fill";
import { VectorTwoLight } from "../light";
import { VectorTwoRegular } from "../regular";
import { VectorTwoThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const VectorTwo = memo(function VectorTwo(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VectorTwoBold,
      duotone: VectorTwoDuotone,
      fill: VectorTwoFill,
      light: VectorTwoLight,
      regular: VectorTwoRegular,
      thin: VectorTwoThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
