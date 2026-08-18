import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowArcRightBoldIcon } from "../bold/arrow-arc-right-bold.icon";
import { ArrowArcRightDuotoneIcon } from "../duotone/arrow-arc-right-duotone.icon";
import { ArrowArcRightFillIcon } from "../fill/arrow-arc-right-fill.icon";
import { ArrowArcRightLightIcon } from "../light/arrow-arc-right-light.icon";
import { ArrowArcRightRegularIcon } from "../regular/arrow-arc-right-regular.icon";
import { ArrowArcRightThinIcon } from "../thin/arrow-arc-right-thin.icon";

export const ArrowArcRightIcon = memo(function ArrowArcRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowArcRightBoldIcon,
      duotone: ArrowArcRightDuotoneIcon,
      fill: ArrowArcRightFillIcon,
      light: ArrowArcRightLightIcon,
      regular: ArrowArcRightRegularIcon,
      thin: ArrowArcRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
