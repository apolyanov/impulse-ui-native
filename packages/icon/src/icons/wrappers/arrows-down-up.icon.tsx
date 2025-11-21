import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowsDownUpBoldIcon } from "../bold";
import { ArrowsDownUpDuotoneIcon } from "../duotone";
import { ArrowsDownUpFillIcon } from "../fill";
import { ArrowsDownUpLightIcon } from "../light";
import { ArrowsDownUpRegularIcon } from "../regular";
import { ArrowsDownUpThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowsDownUpIcon = memo(function ArrowsDownUp(
  props: IconWrapperProps
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
