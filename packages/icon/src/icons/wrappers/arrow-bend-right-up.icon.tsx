import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowBendRightUpBoldIcon } from "../bold/arrow-bend-right-up-bold.icon";
import { ArrowBendRightUpDuotoneIcon } from "../duotone/arrow-bend-right-up-duotone.icon";
import { ArrowBendRightUpFillIcon } from "../fill/arrow-bend-right-up-fill.icon";
import { ArrowBendRightUpLightIcon } from "../light/arrow-bend-right-up-light.icon";
import { ArrowBendRightUpRegularIcon } from "../regular/arrow-bend-right-up-regular.icon";
import { ArrowBendRightUpThinIcon } from "../thin/arrow-bend-right-up-thin.icon";

export const ArrowBendRightUpIcon = memo(function ArrowBendRightUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendRightUpBoldIcon,
      duotone: ArrowBendRightUpDuotoneIcon,
      fill: ArrowBendRightUpFillIcon,
      light: ArrowBendRightUpLightIcon,
      regular: ArrowBendRightUpRegularIcon,
      thin: ArrowBendRightUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
