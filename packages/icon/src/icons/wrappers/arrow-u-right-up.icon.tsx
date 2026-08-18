import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowURightUpBoldIcon } from "../bold/arrow-u-right-up-bold.icon";
import { ArrowURightUpDuotoneIcon } from "../duotone/arrow-u-right-up-duotone.icon";
import { ArrowURightUpFillIcon } from "../fill/arrow-u-right-up-fill.icon";
import { ArrowURightUpLightIcon } from "../light/arrow-u-right-up-light.icon";
import { ArrowURightUpRegularIcon } from "../regular/arrow-u-right-up-regular.icon";
import { ArrowURightUpThinIcon } from "../thin/arrow-u-right-up-thin.icon";

export const ArrowURightUpIcon = memo(function ArrowURightUp(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowURightUpBoldIcon,
      duotone: ArrowURightUpDuotoneIcon,
      fill: ArrowURightUpFillIcon,
      light: ArrowURightUpLightIcon,
      regular: ArrowURightUpRegularIcon,
      thin: ArrowURightUpThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
