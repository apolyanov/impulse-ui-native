import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowUpLeftBoldIcon } from "../bold/arrow-up-left-bold.icon";
import { ArrowUpLeftDuotoneIcon } from "../duotone/arrow-up-left-duotone.icon";
import { ArrowUpLeftFillIcon } from "../fill/arrow-up-left-fill.icon";
import { ArrowUpLeftLightIcon } from "../light/arrow-up-left-light.icon";
import { ArrowUpLeftRegularIcon } from "../regular/arrow-up-left-regular.icon";
import { ArrowUpLeftThinIcon } from "../thin/arrow-up-left-thin.icon";

export const ArrowUpLeftIcon = memo(function ArrowUpLeft(
  props: IconWrapperProps,
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
