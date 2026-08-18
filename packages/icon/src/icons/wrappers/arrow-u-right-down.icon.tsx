import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowURightDownBoldIcon } from "../bold/arrow-u-right-down-bold.icon";
import { ArrowURightDownDuotoneIcon } from "../duotone/arrow-u-right-down-duotone.icon";
import { ArrowURightDownFillIcon } from "../fill/arrow-u-right-down-fill.icon";
import { ArrowURightDownLightIcon } from "../light/arrow-u-right-down-light.icon";
import { ArrowURightDownRegularIcon } from "../regular/arrow-u-right-down-regular.icon";
import { ArrowURightDownThinIcon } from "../thin/arrow-u-right-down-thin.icon";

export const ArrowURightDownIcon = memo(function ArrowURightDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowURightDownBoldIcon,
      duotone: ArrowURightDownDuotoneIcon,
      fill: ArrowURightDownFillIcon,
      light: ArrowURightDownLightIcon,
      regular: ArrowURightDownRegularIcon,
      thin: ArrowURightDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
