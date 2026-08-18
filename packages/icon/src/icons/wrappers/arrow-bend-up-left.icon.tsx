import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowBendUpLeftBoldIcon } from "../bold/arrow-bend-up-left-bold.icon";
import { ArrowBendUpLeftDuotoneIcon } from "../duotone/arrow-bend-up-left-duotone.icon";
import { ArrowBendUpLeftFillIcon } from "../fill/arrow-bend-up-left-fill.icon";
import { ArrowBendUpLeftLightIcon } from "../light/arrow-bend-up-left-light.icon";
import { ArrowBendUpLeftRegularIcon } from "../regular/arrow-bend-up-left-regular.icon";
import { ArrowBendUpLeftThinIcon } from "../thin/arrow-bend-up-left-thin.icon";

export const ArrowBendUpLeftIcon = memo(function ArrowBendUpLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendUpLeftBoldIcon,
      duotone: ArrowBendUpLeftDuotoneIcon,
      fill: ArrowBendUpLeftFillIcon,
      light: ArrowBendUpLeftLightIcon,
      regular: ArrowBendUpLeftRegularIcon,
      thin: ArrowBendUpLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
