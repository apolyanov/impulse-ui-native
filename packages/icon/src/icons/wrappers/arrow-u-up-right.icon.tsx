import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowUUpRightBoldIcon } from "../bold/arrow-u-up-right-bold.icon";
import { ArrowUUpRightDuotoneIcon } from "../duotone/arrow-u-up-right-duotone.icon";
import { ArrowUUpRightFillIcon } from "../fill/arrow-u-up-right-fill.icon";
import { ArrowUUpRightLightIcon } from "../light/arrow-u-up-right-light.icon";
import { ArrowUUpRightRegularIcon } from "../regular/arrow-u-up-right-regular.icon";
import { ArrowUUpRightThinIcon } from "../thin/arrow-u-up-right-thin.icon";

export const ArrowUUpRightIcon = memo(function ArrowUUpRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowUUpRightBoldIcon,
      duotone: ArrowUUpRightDuotoneIcon,
      fill: ArrowUUpRightFillIcon,
      light: ArrowUUpRightLightIcon,
      regular: ArrowUUpRightRegularIcon,
      thin: ArrowUUpRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
