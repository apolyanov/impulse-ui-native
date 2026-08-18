import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowCircleLeftBoldIcon } from "../bold/arrow-circle-left-bold.icon";
import { ArrowCircleLeftDuotoneIcon } from "../duotone/arrow-circle-left-duotone.icon";
import { ArrowCircleLeftFillIcon } from "../fill/arrow-circle-left-fill.icon";
import { ArrowCircleLeftLightIcon } from "../light/arrow-circle-left-light.icon";
import { ArrowCircleLeftRegularIcon } from "../regular/arrow-circle-left-regular.icon";
import { ArrowCircleLeftThinIcon } from "../thin/arrow-circle-left-thin.icon";

export const ArrowCircleLeftIcon = memo(function ArrowCircleLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleLeftBoldIcon,
      duotone: ArrowCircleLeftDuotoneIcon,
      fill: ArrowCircleLeftFillIcon,
      light: ArrowCircleLeftLightIcon,
      regular: ArrowCircleLeftRegularIcon,
      thin: ArrowCircleLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
