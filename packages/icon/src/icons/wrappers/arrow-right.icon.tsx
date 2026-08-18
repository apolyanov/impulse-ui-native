import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowRightBoldIcon } from "../bold/arrow-right-bold.icon";
import { ArrowRightDuotoneIcon } from "../duotone/arrow-right-duotone.icon";
import { ArrowRightFillIcon } from "../fill/arrow-right-fill.icon";
import { ArrowRightLightIcon } from "../light/arrow-right-light.icon";
import { ArrowRightRegularIcon } from "../regular/arrow-right-regular.icon";
import { ArrowRightThinIcon } from "../thin/arrow-right-thin.icon";

export const ArrowRightIcon = memo(function ArrowRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowRightBoldIcon,
      duotone: ArrowRightDuotoneIcon,
      fill: ArrowRightFillIcon,
      light: ArrowRightLightIcon,
      regular: ArrowRightRegularIcon,
      thin: ArrowRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
