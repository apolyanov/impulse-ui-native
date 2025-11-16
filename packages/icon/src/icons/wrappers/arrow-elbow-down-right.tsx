import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowElbowDownRightBold } from "../bold";
import { ArrowElbowDownRightDuotone } from "../duotone";
import { ArrowElbowDownRightFill } from "../fill";
import { ArrowElbowDownRightLight } from "../light";
import { ArrowElbowDownRightRegular } from "../regular";
import { ArrowElbowDownRightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowElbowDownRight = memo(function ArrowElbowDownRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowElbowDownRightBold,
      duotone: ArrowElbowDownRightDuotone,
      fill: ArrowElbowDownRightFill,
      light: ArrowElbowDownRightLight,
      regular: ArrowElbowDownRightRegular,
      thin: ArrowElbowDownRightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
