import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DotsThreeOutlineBoldIcon } from "../bold/dots-three-outline-bold.icon";
import { DotsThreeOutlineDuotoneIcon } from "../duotone/dots-three-outline-duotone.icon";
import { DotsThreeOutlineFillIcon } from "../fill/dots-three-outline-fill.icon";
import { DotsThreeOutlineLightIcon } from "../light/dots-three-outline-light.icon";
import { DotsThreeOutlineRegularIcon } from "../regular/dots-three-outline-regular.icon";
import { DotsThreeOutlineThinIcon } from "../thin/dots-three-outline-thin.icon";

export const DotsThreeOutlineIcon = memo(function DotsThreeOutline(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsThreeOutlineBoldIcon,
      duotone: DotsThreeOutlineDuotoneIcon,
      fill: DotsThreeOutlineFillIcon,
      light: DotsThreeOutlineLightIcon,
      regular: DotsThreeOutlineRegularIcon,
      thin: DotsThreeOutlineThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
