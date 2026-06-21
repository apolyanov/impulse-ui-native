import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsLeftRightBoldIcon } from "../bold";
import { ArrowsLeftRightDuotoneIcon } from "../duotone";
import { ArrowsLeftRightFillIcon } from "../fill";
import { ArrowsLeftRightLightIcon } from "../light";
import { ArrowsLeftRightRegularIcon } from "../regular";
import { ArrowsLeftRightThinIcon } from "../thin";

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
