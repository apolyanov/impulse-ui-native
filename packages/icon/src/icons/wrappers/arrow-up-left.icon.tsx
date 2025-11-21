import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowUpLeftBoldIcon } from "../bold";
import { ArrowUpLeftDuotoneIcon } from "../duotone";
import { ArrowUpLeftFillIcon } from "../fill";
import { ArrowUpLeftLightIcon } from "../light";
import { ArrowUpLeftRegularIcon } from "../regular";
import { ArrowUpLeftThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowUpLeftIcon = memo(function ArrowUpLeft(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowUpLeftBoldIcon,
      duotone: ArrowUpLeftDuotoneIcon,
      fill: ArrowUpLeftFillIcon,
      light: ArrowUpLeftLightIcon,
      regular: ArrowUpLeftRegularIcon,
      thin: ArrowUpLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
