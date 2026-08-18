import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowFatLineDownBoldIcon } from "../bold/arrow-fat-line-down-bold.icon";
import { ArrowFatLineDownDuotoneIcon } from "../duotone/arrow-fat-line-down-duotone.icon";
import { ArrowFatLineDownFillIcon } from "../fill/arrow-fat-line-down-fill.icon";
import { ArrowFatLineDownLightIcon } from "../light/arrow-fat-line-down-light.icon";
import { ArrowFatLineDownRegularIcon } from "../regular/arrow-fat-line-down-regular.icon";
import { ArrowFatLineDownThinIcon } from "../thin/arrow-fat-line-down-thin.icon";

export const ArrowFatLineDownIcon = memo(function ArrowFatLineDown(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLineDownBoldIcon,
      duotone: ArrowFatLineDownDuotoneIcon,
      fill: ArrowFatLineDownFillIcon,
      light: ArrowFatLineDownLightIcon,
      regular: ArrowFatLineDownRegularIcon,
      thin: ArrowFatLineDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
