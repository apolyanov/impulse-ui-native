import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VectorThreeBoldIcon } from "../bold/vector-three-bold.icon";
import { VectorThreeDuotoneIcon } from "../duotone/vector-three-duotone.icon";
import { VectorThreeFillIcon } from "../fill/vector-three-fill.icon";
import { VectorThreeLightIcon } from "../light/vector-three-light.icon";
import { VectorThreeRegularIcon } from "../regular/vector-three-regular.icon";
import { VectorThreeThinIcon } from "../thin/vector-three-thin.icon";

export const VectorThreeIcon = memo(function VectorThree(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VectorThreeBoldIcon,
      duotone: VectorThreeDuotoneIcon,
      fill: VectorThreeFillIcon,
      light: VectorThreeLightIcon,
      regular: VectorThreeRegularIcon,
      thin: VectorThreeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
