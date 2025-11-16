import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowElbowLeftDownBold } from "../bold";
import { ArrowElbowLeftDownDuotone } from "../duotone";
import { ArrowElbowLeftDownFill } from "../fill";
import { ArrowElbowLeftDownLight } from "../light";
import { ArrowElbowLeftDownRegular } from "../regular";
import { ArrowElbowLeftDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowElbowLeftDown = memo(function ArrowElbowLeftDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowLeftDownBold,
      duotone: ArrowElbowLeftDownDuotone,
      fill: ArrowElbowLeftDownFill,
      light: ArrowElbowLeftDownLight,
      regular: ArrowElbowLeftDownRegular,
      thin: ArrowElbowLeftDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
