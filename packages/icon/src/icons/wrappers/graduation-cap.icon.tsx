import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { GraduationCapBoldIcon } from "../bold/graduation-cap-bold.icon";
import { GraduationCapDuotoneIcon } from "../duotone/graduation-cap-duotone.icon";
import { GraduationCapFillIcon } from "../fill/graduation-cap-fill.icon";
import { GraduationCapLightIcon } from "../light/graduation-cap-light.icon";
import { GraduationCapRegularIcon } from "../regular/graduation-cap-regular.icon";
import { GraduationCapThinIcon } from "../thin/graduation-cap-thin.icon";

export const GraduationCapIcon = memo(function GraduationCap(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GraduationCapBoldIcon,
      duotone: GraduationCapDuotoneIcon,
      fill: GraduationCapFillIcon,
      light: GraduationCapLightIcon,
      regular: GraduationCapRegularIcon,
      thin: GraduationCapThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
