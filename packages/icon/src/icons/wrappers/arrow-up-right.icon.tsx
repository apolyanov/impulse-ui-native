import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowUpRightBoldIcon } from "../bold/arrow-up-right-bold.icon";
import { ArrowUpRightDuotoneIcon } from "../duotone/arrow-up-right-duotone.icon";
import { ArrowUpRightFillIcon } from "../fill/arrow-up-right-fill.icon";
import { ArrowUpRightLightIcon } from "../light/arrow-up-right-light.icon";
import { ArrowUpRightRegularIcon } from "../regular/arrow-up-right-regular.icon";
import { ArrowUpRightThinIcon } from "../thin/arrow-up-right-thin.icon";

export const ArrowUpRightIcon = memo(function ArrowUpRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowUpRightBoldIcon,
      duotone: ArrowUpRightDuotoneIcon,
      fill: ArrowUpRightFillIcon,
      light: ArrowUpRightLightIcon,
      regular: ArrowUpRightRegularIcon,
      thin: ArrowUpRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
