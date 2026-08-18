import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowFatLineLeftBoldIcon } from "../bold/arrow-fat-line-left-bold.icon";
import { ArrowFatLineLeftDuotoneIcon } from "../duotone/arrow-fat-line-left-duotone.icon";
import { ArrowFatLineLeftFillIcon } from "../fill/arrow-fat-line-left-fill.icon";
import { ArrowFatLineLeftLightIcon } from "../light/arrow-fat-line-left-light.icon";
import { ArrowFatLineLeftRegularIcon } from "../regular/arrow-fat-line-left-regular.icon";
import { ArrowFatLineLeftThinIcon } from "../thin/arrow-fat-line-left-thin.icon";

export const ArrowFatLineLeftIcon = memo(function ArrowFatLineLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowFatLineLeftBoldIcon,
      duotone: ArrowFatLineLeftDuotoneIcon,
      fill: ArrowFatLineLeftFillIcon,
      light: ArrowFatLineLeftLightIcon,
      regular: ArrowFatLineLeftRegularIcon,
      thin: ArrowFatLineLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
