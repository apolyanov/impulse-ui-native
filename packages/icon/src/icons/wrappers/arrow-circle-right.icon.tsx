import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowCircleRightBoldIcon } from "../bold/arrow-circle-right-bold.icon";
import { ArrowCircleRightDuotoneIcon } from "../duotone/arrow-circle-right-duotone.icon";
import { ArrowCircleRightFillIcon } from "../fill/arrow-circle-right-fill.icon";
import { ArrowCircleRightLightIcon } from "../light/arrow-circle-right-light.icon";
import { ArrowCircleRightRegularIcon } from "../regular/arrow-circle-right-regular.icon";
import { ArrowCircleRightThinIcon } from "../thin/arrow-circle-right-thin.icon";

export const ArrowCircleRightIcon = memo(function ArrowCircleRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleRightBoldIcon,
      duotone: ArrowCircleRightDuotoneIcon,
      fill: ArrowCircleRightFillIcon,
      light: ArrowCircleRightLightIcon,
      regular: ArrowCircleRightRegularIcon,
      thin: ArrowCircleRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
