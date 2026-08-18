import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowBendDoubleUpRightBoldIcon } from "../bold/arrow-bend-double-up-right-bold.icon";
import { ArrowBendDoubleUpRightDuotoneIcon } from "../duotone/arrow-bend-double-up-right-duotone.icon";
import { ArrowBendDoubleUpRightFillIcon } from "../fill/arrow-bend-double-up-right-fill.icon";
import { ArrowBendDoubleUpRightLightIcon } from "../light/arrow-bend-double-up-right-light.icon";
import { ArrowBendDoubleUpRightRegularIcon } from "../regular/arrow-bend-double-up-right-regular.icon";
import { ArrowBendDoubleUpRightThinIcon } from "../thin/arrow-bend-double-up-right-thin.icon";

export const ArrowBendDoubleUpRightIcon = memo(function ArrowBendDoubleUpRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendDoubleUpRightBoldIcon,
      duotone: ArrowBendDoubleUpRightDuotoneIcon,
      fill: ArrowBendDoubleUpRightFillIcon,
      light: ArrowBendDoubleUpRightLightIcon,
      regular: ArrowBendDoubleUpRightRegularIcon,
      thin: ArrowBendDoubleUpRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
