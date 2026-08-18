import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowFatLeftBoldIcon } from "../bold/arrow-fat-left-bold.icon";
import { ArrowFatLeftDuotoneIcon } from "../duotone/arrow-fat-left-duotone.icon";
import { ArrowFatLeftFillIcon } from "../fill/arrow-fat-left-fill.icon";
import { ArrowFatLeftLightIcon } from "../light/arrow-fat-left-light.icon";
import { ArrowFatLeftRegularIcon } from "../regular/arrow-fat-left-regular.icon";
import { ArrowFatLeftThinIcon } from "../thin/arrow-fat-left-thin.icon";

export const ArrowFatLeftIcon = memo(function ArrowFatLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLeftBoldIcon,
      duotone: ArrowFatLeftDuotoneIcon,
      fill: ArrowFatLeftFillIcon,
      light: ArrowFatLeftLightIcon,
      regular: ArrowFatLeftRegularIcon,
      thin: ArrowFatLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
