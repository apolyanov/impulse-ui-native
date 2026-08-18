import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowLineUpLeftBoldIcon } from "../bold/arrow-line-up-left-bold.icon";
import { ArrowLineUpLeftDuotoneIcon } from "../duotone/arrow-line-up-left-duotone.icon";
import { ArrowLineUpLeftFillIcon } from "../fill/arrow-line-up-left-fill.icon";
import { ArrowLineUpLeftLightIcon } from "../light/arrow-line-up-left-light.icon";
import { ArrowLineUpLeftRegularIcon } from "../regular/arrow-line-up-left-regular.icon";
import { ArrowLineUpLeftThinIcon } from "../thin/arrow-line-up-left-thin.icon";

export const ArrowLineUpLeftIcon = memo(function ArrowLineUpLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineUpLeftBoldIcon,
      duotone: ArrowLineUpLeftDuotoneIcon,
      fill: ArrowLineUpLeftFillIcon,
      light: ArrowLineUpLeftLightIcon,
      regular: ArrowLineUpLeftRegularIcon,
      thin: ArrowLineUpLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
