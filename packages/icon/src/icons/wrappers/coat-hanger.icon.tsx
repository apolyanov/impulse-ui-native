import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CoatHangerBoldIcon } from "../bold/coat-hanger-bold.icon";
import { CoatHangerDuotoneIcon } from "../duotone/coat-hanger-duotone.icon";
import { CoatHangerFillIcon } from "../fill/coat-hanger-fill.icon";
import { CoatHangerLightIcon } from "../light/coat-hanger-light.icon";
import { CoatHangerRegularIcon } from "../regular/coat-hanger-regular.icon";
import { CoatHangerThinIcon } from "../thin/coat-hanger-thin.icon";

export const CoatHangerIcon = memo(function CoatHanger(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CoatHangerBoldIcon,
      duotone: CoatHangerDuotoneIcon,
      fill: CoatHangerFillIcon,
      light: CoatHangerLightIcon,
      regular: CoatHangerRegularIcon,
      thin: CoatHangerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
