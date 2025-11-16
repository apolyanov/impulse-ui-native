import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowElbowLeftUpBold } from "../bold";
import { ArrowElbowLeftUpDuotone } from "../duotone";
import { ArrowElbowLeftUpFill } from "../fill";
import { ArrowElbowLeftUpLight } from "../light";
import { ArrowElbowLeftUpRegular } from "../regular";
import { ArrowElbowLeftUpThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowElbowLeftUp = memo(function ArrowElbowLeftUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowLeftUpBold,
      duotone: ArrowElbowLeftUpDuotone,
      fill: ArrowElbowLeftUpFill,
      light: ArrowElbowLeftUpLight,
      regular: ArrowElbowLeftUpRegular,
      thin: ArrowElbowLeftUpThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
