import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowFatLineDownBold } from "../bold";
import { ArrowFatLineDownDuotone } from "../duotone";
import { ArrowFatLineDownFill } from "../fill";
import { ArrowFatLineDownLight } from "../light";
import { ArrowFatLineDownRegular } from "../regular";
import { ArrowFatLineDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowFatLineDown = memo(function ArrowFatLineDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLineDownBold,
      duotone: ArrowFatLineDownDuotone,
      fill: ArrowFatLineDownFill,
      light: ArrowFatLineDownLight,
      regular: ArrowFatLineDownRegular,
      thin: ArrowFatLineDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
