import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CrownCrossBoldIcon } from "../bold/crown-cross-bold.icon";
import { CrownCrossDuotoneIcon } from "../duotone/crown-cross-duotone.icon";
import { CrownCrossFillIcon } from "../fill/crown-cross-fill.icon";
import { CrownCrossLightIcon } from "../light/crown-cross-light.icon";
import { CrownCrossRegularIcon } from "../regular/crown-cross-regular.icon";
import { CrownCrossThinIcon } from "../thin/crown-cross-thin.icon";

export const CrownCrossIcon = memo(function CrownCross(
  props: IconWrapperProps,
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
