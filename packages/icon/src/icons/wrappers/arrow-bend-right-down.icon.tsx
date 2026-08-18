import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowBendRightDownBoldIcon } from "../bold/arrow-bend-right-down-bold.icon";
import { ArrowBendRightDownDuotoneIcon } from "../duotone/arrow-bend-right-down-duotone.icon";
import { ArrowBendRightDownFillIcon } from "../fill/arrow-bend-right-down-fill.icon";
import { ArrowBendRightDownLightIcon } from "../light/arrow-bend-right-down-light.icon";
import { ArrowBendRightDownRegularIcon } from "../regular/arrow-bend-right-down-regular.icon";
import { ArrowBendRightDownThinIcon } from "../thin/arrow-bend-right-down-thin.icon";

export const ArrowBendRightDownIcon = memo(function ArrowBendRightDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendRightDownBoldIcon,
      duotone: ArrowBendRightDownDuotoneIcon,
      fill: ArrowBendRightDownFillIcon,
      light: ArrowBendRightDownLightIcon,
      regular: ArrowBendRightDownRegularIcon,
      thin: ArrowBendRightDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
