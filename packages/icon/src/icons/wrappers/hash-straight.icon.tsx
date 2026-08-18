import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HashStraightBoldIcon } from "../bold/hash-straight-bold.icon";
import { HashStraightDuotoneIcon } from "../duotone/hash-straight-duotone.icon";
import { HashStraightFillIcon } from "../fill/hash-straight-fill.icon";
import { HashStraightLightIcon } from "../light/hash-straight-light.icon";
import { HashStraightRegularIcon } from "../regular/hash-straight-regular.icon";
import { HashStraightThinIcon } from "../thin/hash-straight-thin.icon";

export const HashStraightIcon = memo(function HashStraight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HashStraightBoldIcon,
      duotone: HashStraightDuotoneIcon,
      fill: HashStraightFillIcon,
      light: HashStraightLightIcon,
      regular: HashStraightRegularIcon,
      thin: HashStraightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
