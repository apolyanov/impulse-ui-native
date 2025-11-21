import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CrownCrossBoldIcon } from "../bold";
import { CrownCrossDuotoneIcon } from "../duotone";
import { CrownCrossFillIcon } from "../fill";
import { CrownCrossLightIcon } from "../light";
import { CrownCrossRegularIcon } from "../regular";
import { CrownCrossThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CrownCrossIcon = memo(function CrownCross(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CrownCrossBoldIcon,
      duotone: CrownCrossDuotoneIcon,
      fill: CrownCrossFillIcon,
      light: CrownCrossLightIcon,
      regular: CrownCrossRegularIcon,
      thin: CrownCrossThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
