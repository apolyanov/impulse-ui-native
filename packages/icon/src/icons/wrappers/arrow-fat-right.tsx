import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatRightBold } from "../bold";
import { ArrowFatRightDuotone } from "../duotone";
import { ArrowFatRightFill } from "../fill";
import { ArrowFatRightLight } from "../light";
import { ArrowFatRightRegular } from "../regular";
import { ArrowFatRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatRight = memo(function ArrowFatRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatRightBold,
      duotone: ArrowFatRightDuotone,
      fill: ArrowFatRightFill,
      light: ArrowFatRightLight,
      regular: ArrowFatRightRegular,
      thin: ArrowFatRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
