import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowLineRightBold } from "../bold";
import { ArrowLineRightDuotone } from "../duotone";
import { ArrowLineRightFill } from "../fill";
import { ArrowLineRightLight } from "../light";
import { ArrowLineRightRegular } from "../regular";
import { ArrowLineRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowLineRight = memo(function ArrowLineRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineRightBold,
      duotone: ArrowLineRightDuotone,
      fill: ArrowLineRightFill,
      light: ArrowLineRightLight,
      regular: ArrowLineRightRegular,
      thin: ArrowLineRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
