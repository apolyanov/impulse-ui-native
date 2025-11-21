import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ArrowLineRightBoldIcon } from "../bold";
import { ArrowLineRightDuotoneIcon } from "../duotone";
import { ArrowLineRightFillIcon } from "../fill";
import { ArrowLineRightLightIcon } from "../light";
import { ArrowLineRightRegularIcon } from "../regular";
import { ArrowLineRightThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ArrowLineRightIcon = memo(function ArrowLineRight(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowLineRightBoldIcon,
      duotone: ArrowLineRightDuotoneIcon,
      fill: ArrowLineRightFillIcon,
      light: ArrowLineRightLightIcon,
      regular: ArrowLineRightRegularIcon,
      thin: ArrowLineRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
