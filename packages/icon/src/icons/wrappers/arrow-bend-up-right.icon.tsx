import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowBendUpRightBoldIcon } from "../bold/arrow-bend-up-right-bold.icon";
import { ArrowBendUpRightDuotoneIcon } from "../duotone/arrow-bend-up-right-duotone.icon";
import { ArrowBendUpRightFillIcon } from "../fill/arrow-bend-up-right-fill.icon";
import { ArrowBendUpRightLightIcon } from "../light/arrow-bend-up-right-light.icon";
import { ArrowBendUpRightRegularIcon } from "../regular/arrow-bend-up-right-regular.icon";
import { ArrowBendUpRightThinIcon } from "../thin/arrow-bend-up-right-thin.icon";

export const ArrowBendUpRightIcon = memo(function ArrowBendUpRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendUpRightBoldIcon,
      duotone: ArrowBendUpRightDuotoneIcon,
      fill: ArrowBendUpRightFillIcon,
      light: ArrowBendUpRightLightIcon,
      regular: ArrowBendUpRightRegularIcon,
      thin: ArrowBendUpRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
