import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ArrowBendDownLeftBoldIcon } from "../bold/arrow-bend-down-left-bold.icon";
import { ArrowBendDownLeftDuotoneIcon } from "../duotone/arrow-bend-down-left-duotone.icon";
import { ArrowBendDownLeftFillIcon } from "../fill/arrow-bend-down-left-fill.icon";
import { ArrowBendDownLeftLightIcon } from "../light/arrow-bend-down-left-light.icon";
import { ArrowBendDownLeftRegularIcon } from "../regular/arrow-bend-down-left-regular.icon";
import { ArrowBendDownLeftThinIcon } from "../thin/arrow-bend-down-left-thin.icon";

export const ArrowBendDownLeftIcon = memo(function ArrowBendDownLeft(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ArrowBendDownLeftBoldIcon,
      duotone: ArrowBendDownLeftDuotoneIcon,
      fill: ArrowBendDownLeftFillIcon,
      light: ArrowBendDownLeftLightIcon,
      regular: ArrowBendDownLeftRegularIcon,
      thin: ArrowBendDownLeftThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
