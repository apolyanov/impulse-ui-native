import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsLeftRightBold } from "../bold";
import { ArrowsLeftRightDuotone } from "../duotone";
import { ArrowsLeftRightFill } from "../fill";
import { ArrowsLeftRightLight } from "../light";
import { ArrowsLeftRightRegular } from "../regular";
import { ArrowsLeftRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsLeftRight = memo(function ArrowsLeftRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsLeftRightBold,
      duotone: ArrowsLeftRightDuotone,
      fill: ArrowsLeftRightFill,
      light: ArrowsLeftRightLight,
      regular: ArrowsLeftRightRegular,
      thin: ArrowsLeftRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
