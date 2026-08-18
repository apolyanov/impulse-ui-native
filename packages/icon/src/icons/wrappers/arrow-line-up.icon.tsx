import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowLineUpBoldIcon } from "../bold/arrow-line-up-bold.icon";
import { ArrowLineUpDuotoneIcon } from "../duotone/arrow-line-up-duotone.icon";
import { ArrowLineUpFillIcon } from "../fill/arrow-line-up-fill.icon";
import { ArrowLineUpLightIcon } from "../light/arrow-line-up-light.icon";
import { ArrowLineUpRegularIcon } from "../regular/arrow-line-up-regular.icon";
import { ArrowLineUpThinIcon } from "../thin/arrow-line-up-thin.icon";

export const ArrowLineUpIcon = memo(function ArrowLineUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineUpBoldIcon,
      duotone: ArrowLineUpDuotoneIcon,
      fill: ArrowLineUpFillIcon,
      light: ArrowLineUpLightIcon,
      regular: ArrowLineUpRegularIcon,
      thin: ArrowLineUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
