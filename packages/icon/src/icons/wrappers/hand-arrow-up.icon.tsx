import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HandArrowUpBoldIcon } from "../bold/hand-arrow-up-bold.icon";
import { HandArrowUpDuotoneIcon } from "../duotone/hand-arrow-up-duotone.icon";
import { HandArrowUpFillIcon } from "../fill/hand-arrow-up-fill.icon";
import { HandArrowUpLightIcon } from "../light/hand-arrow-up-light.icon";
import { HandArrowUpRegularIcon } from "../regular/hand-arrow-up-regular.icon";
import { HandArrowUpThinIcon } from "../thin/hand-arrow-up-thin.icon";

export const HandArrowUpIcon = memo(function HandArrowUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandArrowUpBoldIcon,
      duotone: HandArrowUpDuotoneIcon,
      fill: HandArrowUpFillIcon,
      light: HandArrowUpLightIcon,
      regular: HandArrowUpRegularIcon,
      thin: HandArrowUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
