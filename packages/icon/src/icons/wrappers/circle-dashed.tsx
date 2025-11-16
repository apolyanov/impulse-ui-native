import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CircleDashedBold } from "../bold";
import { CircleDashedDuotone } from "../duotone";
import { CircleDashedFill } from "../fill";
import { CircleDashedLight } from "../light";
import { CircleDashedRegular } from "../regular";
import { CircleDashedThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CircleDashed = memo(function CircleDashed(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CircleDashedBold,
      duotone: CircleDashedDuotone,
      fill: CircleDashedFill,
      light: CircleDashedLight,
      regular: CircleDashedRegular,
      thin: CircleDashedThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
