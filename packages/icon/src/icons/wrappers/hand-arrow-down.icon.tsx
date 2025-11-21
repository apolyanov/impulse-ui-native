import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandArrowDownBoldIcon } from "../bold";
import { HandArrowDownDuotoneIcon } from "../duotone";
import { HandArrowDownFillIcon } from "../fill";
import { HandArrowDownLightIcon } from "../light";
import { HandArrowDownRegularIcon } from "../regular";
import { HandArrowDownThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandArrowDownIcon = memo(function HandArrowDown(
  props: IconWrapperProps
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
