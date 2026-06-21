import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowLineUpLeftBoldIcon } from "../bold";
import { ArrowLineUpLeftDuotoneIcon } from "../duotone";
import { ArrowLineUpLeftFillIcon } from "../fill";
import { ArrowLineUpLeftLightIcon } from "../light";
import { ArrowLineUpLeftRegularIcon } from "../regular";
import { ArrowLineUpLeftThinIcon } from "../thin";

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
