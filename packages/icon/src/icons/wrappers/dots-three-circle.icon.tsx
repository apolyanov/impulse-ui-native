import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DotsThreeCircleBoldIcon } from "../bold/dots-three-circle-bold.icon";
import { DotsThreeCircleDuotoneIcon } from "../duotone/dots-three-circle-duotone.icon";
import { DotsThreeCircleFillIcon } from "../fill/dots-three-circle-fill.icon";
import { DotsThreeCircleLightIcon } from "../light/dots-three-circle-light.icon";
import { DotsThreeCircleRegularIcon } from "../regular/dots-three-circle-regular.icon";
import { DotsThreeCircleThinIcon } from "../thin/dots-three-circle-thin.icon";

export const DotsThreeCircleIcon = memo(function DotsThreeCircle(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsThreeCircleBoldIcon,
      duotone: DotsThreeCircleDuotoneIcon,
      fill: DotsThreeCircleFillIcon,
      light: DotsThreeCircleLightIcon,
      regular: DotsThreeCircleRegularIcon,
      thin: DotsThreeCircleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
