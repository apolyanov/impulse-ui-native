import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandArrowDownBoldIcon } from "../bold/hand-arrow-down-bold.icon";
import { HandArrowDownDuotoneIcon } from "../duotone/hand-arrow-down-duotone.icon";
import { HandArrowDownFillIcon } from "../fill/hand-arrow-down-fill.icon";
import { HandArrowDownLightIcon } from "../light/hand-arrow-down-light.icon";
import { HandArrowDownRegularIcon } from "../regular/hand-arrow-down-regular.icon";
import { HandArrowDownThinIcon } from "../thin/hand-arrow-down-thin.icon";

export const HandArrowDownIcon = memo(function HandArrowDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandArrowDownBoldIcon,
      duotone: HandArrowDownDuotoneIcon,
      fill: HandArrowDownFillIcon,
      light: HandArrowDownLightIcon,
      regular: HandArrowDownRegularIcon,
      thin: HandArrowDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
