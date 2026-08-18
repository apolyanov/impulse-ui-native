import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowLineUpRightBoldIcon } from "../bold/arrow-line-up-right-bold.icon";
import { ArrowLineUpRightDuotoneIcon } from "../duotone/arrow-line-up-right-duotone.icon";
import { ArrowLineUpRightFillIcon } from "../fill/arrow-line-up-right-fill.icon";
import { ArrowLineUpRightLightIcon } from "../light/arrow-line-up-right-light.icon";
import { ArrowLineUpRightRegularIcon } from "../regular/arrow-line-up-right-regular.icon";
import { ArrowLineUpRightThinIcon } from "../thin/arrow-line-up-right-thin.icon";

export const ArrowLineUpRightIcon = memo(function ArrowLineUpRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineUpRightBoldIcon,
      duotone: ArrowLineUpRightDuotoneIcon,
      fill: ArrowLineUpRightFillIcon,
      light: ArrowLineUpRightLightIcon,
      regular: ArrowLineUpRightRegularIcon,
      thin: ArrowLineUpRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
