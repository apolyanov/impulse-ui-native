import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowULeftDownBoldIcon } from "../bold/arrow-u-left-down-bold.icon";
import { ArrowULeftDownDuotoneIcon } from "../duotone/arrow-u-left-down-duotone.icon";
import { ArrowULeftDownFillIcon } from "../fill/arrow-u-left-down-fill.icon";
import { ArrowULeftDownLightIcon } from "../light/arrow-u-left-down-light.icon";
import { ArrowULeftDownRegularIcon } from "../regular/arrow-u-left-down-regular.icon";
import { ArrowULeftDownThinIcon } from "../thin/arrow-u-left-down-thin.icon";

export const ArrowULeftDownIcon = memo(function ArrowULeftDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowULeftDownBoldIcon,
      duotone: ArrowULeftDownDuotoneIcon,
      fill: ArrowULeftDownFillIcon,
      light: ArrowULeftDownLightIcon,
      regular: ArrowULeftDownRegularIcon,
      thin: ArrowULeftDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
