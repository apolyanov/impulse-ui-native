import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SkipBackCircleBoldIcon } from "../bold/skip-back-circle-bold.icon";
import { SkipBackCircleDuotoneIcon } from "../duotone/skip-back-circle-duotone.icon";
import { SkipBackCircleFillIcon } from "../fill/skip-back-circle-fill.icon";
import { SkipBackCircleLightIcon } from "../light/skip-back-circle-light.icon";
import { SkipBackCircleRegularIcon } from "../regular/skip-back-circle-regular.icon";
import { SkipBackCircleThinIcon } from "../thin/skip-back-circle-thin.icon";

export const SkipBackCircleIcon = memo(function SkipBackCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SkipBackCircleBoldIcon,
      duotone: SkipBackCircleDuotoneIcon,
      fill: SkipBackCircleFillIcon,
      light: SkipBackCircleLightIcon,
      regular: SkipBackCircleRegularIcon,
      thin: SkipBackCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
