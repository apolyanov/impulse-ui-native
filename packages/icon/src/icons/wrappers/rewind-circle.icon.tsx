import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RewindCircleBoldIcon } from "../bold/rewind-circle-bold.icon";
import { RewindCircleDuotoneIcon } from "../duotone/rewind-circle-duotone.icon";
import { RewindCircleFillIcon } from "../fill/rewind-circle-fill.icon";
import { RewindCircleLightIcon } from "../light/rewind-circle-light.icon";
import { RewindCircleRegularIcon } from "../regular/rewind-circle-regular.icon";
import { RewindCircleThinIcon } from "../thin/rewind-circle-thin.icon";

export const RewindCircleIcon = memo(function RewindCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RewindCircleBoldIcon,
      duotone: RewindCircleDuotoneIcon,
      fill: RewindCircleFillIcon,
      light: RewindCircleLightIcon,
      regular: RewindCircleRegularIcon,
      thin: RewindCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
