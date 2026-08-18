import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsLeftRightBoldIcon } from "../bold/arrows-left-right-bold.icon";
import { ArrowsLeftRightDuotoneIcon } from "../duotone/arrows-left-right-duotone.icon";
import { ArrowsLeftRightFillIcon } from "../fill/arrows-left-right-fill.icon";
import { ArrowsLeftRightLightIcon } from "../light/arrows-left-right-light.icon";
import { ArrowsLeftRightRegularIcon } from "../regular/arrows-left-right-regular.icon";
import { ArrowsLeftRightThinIcon } from "../thin/arrows-left-right-thin.icon";

export const ArrowsLeftRightIcon = memo(function ArrowsLeftRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsLeftRightBoldIcon,
      duotone: ArrowsLeftRightDuotoneIcon,
      fill: ArrowsLeftRightFillIcon,
      light: ArrowsLeftRightLightIcon,
      regular: ArrowsLeftRightRegularIcon,
      thin: ArrowsLeftRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
