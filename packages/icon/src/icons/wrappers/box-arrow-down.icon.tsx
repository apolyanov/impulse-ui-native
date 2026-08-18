import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BoxArrowDownBoldIcon } from "../bold/box-arrow-down-bold.icon";
import { BoxArrowDownDuotoneIcon } from "../duotone/box-arrow-down-duotone.icon";
import { BoxArrowDownFillIcon } from "../fill/box-arrow-down-fill.icon";
import { BoxArrowDownLightIcon } from "../light/box-arrow-down-light.icon";
import { BoxArrowDownRegularIcon } from "../regular/box-arrow-down-regular.icon";
import { BoxArrowDownThinIcon } from "../thin/box-arrow-down-thin.icon";

export const BoxArrowDownIcon = memo(function BoxArrowDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BoxArrowDownBoldIcon,
      duotone: BoxArrowDownDuotoneIcon,
      fill: BoxArrowDownFillIcon,
      light: BoxArrowDownLightIcon,
      regular: BoxArrowDownRegularIcon,
      thin: BoxArrowDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
