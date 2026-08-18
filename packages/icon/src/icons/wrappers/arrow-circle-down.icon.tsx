import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowCircleDownBoldIcon } from "../bold/arrow-circle-down-bold.icon";
import { ArrowCircleDownDuotoneIcon } from "../duotone/arrow-circle-down-duotone.icon";
import { ArrowCircleDownFillIcon } from "../fill/arrow-circle-down-fill.icon";
import { ArrowCircleDownLightIcon } from "../light/arrow-circle-down-light.icon";
import { ArrowCircleDownRegularIcon } from "../regular/arrow-circle-down-regular.icon";
import { ArrowCircleDownThinIcon } from "../thin/arrow-circle-down-thin.icon";

export const ArrowCircleDownIcon = memo(function ArrowCircleDown(
  props: IconWrapperProps,
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
