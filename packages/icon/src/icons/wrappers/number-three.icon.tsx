import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberThreeBoldIcon } from "../bold";
import { NumberThreeDuotoneIcon } from "../duotone";
import { NumberThreeFillIcon } from "../fill";
import { NumberThreeLightIcon } from "../light";
import { NumberThreeRegularIcon } from "../regular";
import { NumberThreeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberThreeIcon = memo(function NumberThree(
  props: IconWrapperProps
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
