import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BoxArrowUpBoldIcon } from "../bold/box-arrow-up-bold.icon";
import { BoxArrowUpDuotoneIcon } from "../duotone/box-arrow-up-duotone.icon";
import { BoxArrowUpFillIcon } from "../fill/box-arrow-up-fill.icon";
import { BoxArrowUpLightIcon } from "../light/box-arrow-up-light.icon";
import { BoxArrowUpRegularIcon } from "../regular/box-arrow-up-regular.icon";
import { BoxArrowUpThinIcon } from "../thin/box-arrow-up-thin.icon";

export const BoxArrowUpIcon = memo(function BoxArrowUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BoxArrowUpBoldIcon,
      duotone: BoxArrowUpDuotoneIcon,
      fill: BoxArrowUpFillIcon,
      light: BoxArrowUpLightIcon,
      regular: BoxArrowUpRegularIcon,
      thin: BoxArrowUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
