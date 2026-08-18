import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowBendLeftUpBoldIcon } from "../bold/arrow-bend-left-up-bold.icon";
import { ArrowBendLeftUpDuotoneIcon } from "../duotone/arrow-bend-left-up-duotone.icon";
import { ArrowBendLeftUpFillIcon } from "../fill/arrow-bend-left-up-fill.icon";
import { ArrowBendLeftUpLightIcon } from "../light/arrow-bend-left-up-light.icon";
import { ArrowBendLeftUpRegularIcon } from "../regular/arrow-bend-left-up-regular.icon";
import { ArrowBendLeftUpThinIcon } from "../thin/arrow-bend-left-up-thin.icon";

export const ArrowBendLeftUpIcon = memo(function ArrowBendLeftUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendLeftUpBoldIcon,
      duotone: ArrowBendLeftUpDuotoneIcon,
      fill: ArrowBendLeftUpFillIcon,
      light: ArrowBendLeftUpLightIcon,
      regular: ArrowBendLeftUpRegularIcon,
      thin: ArrowBendLeftUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
