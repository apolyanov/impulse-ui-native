import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HashStraightBold } from "../bold";
import { HashStraightDuotone } from "../duotone";
import { HashStraightFill } from "../fill";
import { HashStraightLight } from "../light";
import { HashStraightRegular } from "../regular";
import { HashStraightThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HashStraight = memo(function HashStraight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HashStraightBold,
      duotone: HashStraightDuotone,
      fill: HashStraightFill,
      light: HashStraightLight,
      regular: HashStraightRegular,
      thin: HashStraightThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
