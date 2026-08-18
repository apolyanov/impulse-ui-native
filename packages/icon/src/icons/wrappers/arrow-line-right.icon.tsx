import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowLineRightBoldIcon } from "../bold/arrow-line-right-bold.icon";
import { ArrowLineRightDuotoneIcon } from "../duotone/arrow-line-right-duotone.icon";
import { ArrowLineRightFillIcon } from "../fill/arrow-line-right-fill.icon";
import { ArrowLineRightLightIcon } from "../light/arrow-line-right-light.icon";
import { ArrowLineRightRegularIcon } from "../regular/arrow-line-right-regular.icon";
import { ArrowLineRightThinIcon } from "../thin/arrow-line-right-thin.icon";

export const ArrowLineRightIcon = memo(function ArrowLineRight(
  props: IconWrapperProps,
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
