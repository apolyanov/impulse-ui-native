import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowUUpLeftBoldIcon } from "../bold";
import { ArrowUUpLeftDuotoneIcon } from "../duotone";
import { ArrowUUpLeftFillIcon } from "../fill";
import { ArrowUUpLeftLightIcon } from "../light";
import { ArrowUUpLeftRegularIcon } from "../regular";
import { ArrowUUpLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowUUpLeftIcon = memo(function ArrowUUpLeft(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowUUpLeftBoldIcon,
      duotone: ArrowUUpLeftDuotoneIcon,
      fill: ArrowUUpLeftFillIcon,
      light: ArrowUUpLeftLightIcon,
      regular: ArrowUUpLeftRegularIcon,
      thin: ArrowUUpLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
