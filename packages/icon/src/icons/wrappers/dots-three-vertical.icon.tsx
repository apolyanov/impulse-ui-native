import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DotsThreeVerticalBoldIcon } from "../bold/dots-three-vertical-bold.icon";
import { DotsThreeVerticalDuotoneIcon } from "../duotone/dots-three-vertical-duotone.icon";
import { DotsThreeVerticalFillIcon } from "../fill/dots-three-vertical-fill.icon";
import { DotsThreeVerticalLightIcon } from "../light/dots-three-vertical-light.icon";
import { DotsThreeVerticalRegularIcon } from "../regular/dots-three-vertical-regular.icon";
import { DotsThreeVerticalThinIcon } from "../thin/dots-three-vertical-thin.icon";

export const DotsThreeVerticalIcon = memo(function DotsThreeVertical(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsThreeVerticalBoldIcon,
      duotone: DotsThreeVerticalDuotoneIcon,
      fill: DotsThreeVerticalFillIcon,
      light: DotsThreeVerticalLightIcon,
      regular: DotsThreeVerticalRegularIcon,
      thin: DotsThreeVerticalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
