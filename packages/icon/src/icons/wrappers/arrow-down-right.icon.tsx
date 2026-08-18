import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowDownRightBoldIcon } from "../bold/arrow-down-right-bold.icon";
import { ArrowDownRightDuotoneIcon } from "../duotone/arrow-down-right-duotone.icon";
import { ArrowDownRightFillIcon } from "../fill/arrow-down-right-fill.icon";
import { ArrowDownRightLightIcon } from "../light/arrow-down-right-light.icon";
import { ArrowDownRightRegularIcon } from "../regular/arrow-down-right-regular.icon";
import { ArrowDownRightThinIcon } from "../thin/arrow-down-right-thin.icon";

export const ArrowDownRightIcon = memo(function ArrowDownRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowDownRightBoldIcon,
      duotone: ArrowDownRightDuotoneIcon,
      fill: ArrowDownRightFillIcon,
      light: ArrowDownRightLightIcon,
      regular: ArrowDownRightRegularIcon,
      thin: ArrowDownRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
