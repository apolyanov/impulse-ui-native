import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowFatRightBoldIcon } from "../bold/arrow-fat-right-bold.icon";
import { ArrowFatRightDuotoneIcon } from "../duotone/arrow-fat-right-duotone.icon";
import { ArrowFatRightFillIcon } from "../fill/arrow-fat-right-fill.icon";
import { ArrowFatRightLightIcon } from "../light/arrow-fat-right-light.icon";
import { ArrowFatRightRegularIcon } from "../regular/arrow-fat-right-regular.icon";
import { ArrowFatRightThinIcon } from "../thin/arrow-fat-right-thin.icon";

export const ArrowFatRightIcon = memo(function ArrowFatRight(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatRightBoldIcon,
      duotone: ArrowFatRightDuotoneIcon,
      fill: ArrowFatRightFillIcon,
      light: ArrowFatRightLightIcon,
      regular: ArrowFatRightRegularIcon,
      thin: ArrowFatRightThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
