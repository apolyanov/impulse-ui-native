import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowsDownUpBoldIcon } from "../bold/arrows-down-up-bold.icon";
import { ArrowsDownUpDuotoneIcon } from "../duotone/arrows-down-up-duotone.icon";
import { ArrowsDownUpFillIcon } from "../fill/arrows-down-up-fill.icon";
import { ArrowsDownUpLightIcon } from "../light/arrows-down-up-light.icon";
import { ArrowsDownUpRegularIcon } from "../regular/arrows-down-up-regular.icon";
import { ArrowsDownUpThinIcon } from "../thin/arrows-down-up-thin.icon";

export const ArrowsDownUpIcon = memo(function ArrowsDownUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowsDownUpBoldIcon,
      duotone: ArrowsDownUpDuotoneIcon,
      fill: ArrowsDownUpFillIcon,
      light: ArrowsDownUpLightIcon,
      regular: ArrowsDownUpRegularIcon,
      thin: ArrowsDownUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
