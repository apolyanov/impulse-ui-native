import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NumberThreeBoldIcon } from "../bold/number-three-bold.icon";
import { NumberThreeDuotoneIcon } from "../duotone/number-three-duotone.icon";
import { NumberThreeFillIcon } from "../fill/number-three-fill.icon";
import { NumberThreeLightIcon } from "../light/number-three-light.icon";
import { NumberThreeRegularIcon } from "../regular/number-three-regular.icon";
import { NumberThreeThinIcon } from "../thin/number-three-thin.icon";

export const NumberThreeIcon = memo(function NumberThree(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberThreeBoldIcon,
      duotone: NumberThreeDuotoneIcon,
      fill: NumberThreeFillIcon,
      light: NumberThreeLightIcon,
      regular: NumberThreeRegularIcon,
      thin: NumberThreeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
