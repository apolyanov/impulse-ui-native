import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowCircleDownBoldIcon } from "../bold";
import { ArrowCircleDownDuotoneIcon } from "../duotone";
import { ArrowCircleDownFillIcon } from "../fill";
import { ArrowCircleDownLightIcon } from "../light";
import { ArrowCircleDownRegularIcon } from "../regular";
import { ArrowCircleDownThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowCircleDownIcon = memo(function ArrowCircleDown(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleDownBoldIcon,
      duotone: ArrowCircleDownDuotoneIcon,
      fill: ArrowCircleDownFillIcon,
      light: ArrowCircleDownLightIcon,
      regular: ArrowCircleDownRegularIcon,
      thin: ArrowCircleDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
