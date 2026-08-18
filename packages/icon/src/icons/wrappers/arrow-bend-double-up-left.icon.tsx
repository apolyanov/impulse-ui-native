import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowBendDoubleUpLeftBoldIcon } from "../bold/arrow-bend-double-up-left-bold.icon";
import { ArrowBendDoubleUpLeftDuotoneIcon } from "../duotone/arrow-bend-double-up-left-duotone.icon";
import { ArrowBendDoubleUpLeftFillIcon } from "../fill/arrow-bend-double-up-left-fill.icon";
import { ArrowBendDoubleUpLeftLightIcon } from "../light/arrow-bend-double-up-left-light.icon";
import { ArrowBendDoubleUpLeftRegularIcon } from "../regular/arrow-bend-double-up-left-regular.icon";
import { ArrowBendDoubleUpLeftThinIcon } from "../thin/arrow-bend-double-up-left-thin.icon";

export const ArrowBendDoubleUpLeftIcon = memo(function ArrowBendDoubleUpLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendDoubleUpLeftBoldIcon,
      duotone: ArrowBendDoubleUpLeftDuotoneIcon,
      fill: ArrowBendDoubleUpLeftFillIcon,
      light: ArrowBendDoubleUpLeftLightIcon,
      regular: ArrowBendDoubleUpLeftRegularIcon,
      thin: ArrowBendDoubleUpLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
