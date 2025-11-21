import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowLineUpBoldIcon } from "../bold";
import { ArrowLineUpDuotoneIcon } from "../duotone";
import { ArrowLineUpFillIcon } from "../fill";
import { ArrowLineUpLightIcon } from "../light";
import { ArrowLineUpRegularIcon } from "../regular";
import { ArrowLineUpThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowLineUpIcon = memo(function ArrowLineUp(
  props: IconWrapperProps
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
