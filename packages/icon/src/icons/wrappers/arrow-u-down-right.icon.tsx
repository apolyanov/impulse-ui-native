import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowUDownRightBoldIcon } from "../bold/arrow-u-down-right-bold.icon";
import { ArrowUDownRightDuotoneIcon } from "../duotone/arrow-u-down-right-duotone.icon";
import { ArrowUDownRightFillIcon } from "../fill/arrow-u-down-right-fill.icon";
import { ArrowUDownRightLightIcon } from "../light/arrow-u-down-right-light.icon";
import { ArrowUDownRightRegularIcon } from "../regular/arrow-u-down-right-regular.icon";
import { ArrowUDownRightThinIcon } from "../thin/arrow-u-down-right-thin.icon";

export const ArrowUDownRightIcon = memo(function ArrowUDownRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowUDownRightBoldIcon,
      duotone: ArrowUDownRightDuotoneIcon,
      fill: ArrowUDownRightFillIcon,
      light: ArrowUDownRightLightIcon,
      regular: ArrowUDownRightRegularIcon,
      thin: ArrowUDownRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
