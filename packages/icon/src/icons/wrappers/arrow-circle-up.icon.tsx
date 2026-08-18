import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowCircleUpBoldIcon } from "../bold/arrow-circle-up-bold.icon";
import { ArrowCircleUpDuotoneIcon } from "../duotone/arrow-circle-up-duotone.icon";
import { ArrowCircleUpFillIcon } from "../fill/arrow-circle-up-fill.icon";
import { ArrowCircleUpLightIcon } from "../light/arrow-circle-up-light.icon";
import { ArrowCircleUpRegularIcon } from "../regular/arrow-circle-up-regular.icon";
import { ArrowCircleUpThinIcon } from "../thin/arrow-circle-up-thin.icon";

export const ArrowCircleUpIcon = memo(function ArrowCircleUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowCircleUpBoldIcon,
      duotone: ArrowCircleUpDuotoneIcon,
      fill: ArrowCircleUpFillIcon,
      light: ArrowCircleUpLightIcon,
      regular: ArrowCircleUpRegularIcon,
      thin: ArrowCircleUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
