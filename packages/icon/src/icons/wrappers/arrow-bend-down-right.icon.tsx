import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowBendDownRightBoldIcon } from "../bold/arrow-bend-down-right-bold.icon";
import { ArrowBendDownRightDuotoneIcon } from "../duotone/arrow-bend-down-right-duotone.icon";
import { ArrowBendDownRightFillIcon } from "../fill/arrow-bend-down-right-fill.icon";
import { ArrowBendDownRightLightIcon } from "../light/arrow-bend-down-right-light.icon";
import { ArrowBendDownRightRegularIcon } from "../regular/arrow-bend-down-right-regular.icon";
import { ArrowBendDownRightThinIcon } from "../thin/arrow-bend-down-right-thin.icon";

export const ArrowBendDownRightIcon = memo(function ArrowBendDownRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendDownRightBoldIcon,
      duotone: ArrowBendDownRightDuotoneIcon,
      fill: ArrowBendDownRightFillIcon,
      light: ArrowBendDownRightLightIcon,
      regular: ArrowBendDownRightRegularIcon,
      thin: ArrowBendDownRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
