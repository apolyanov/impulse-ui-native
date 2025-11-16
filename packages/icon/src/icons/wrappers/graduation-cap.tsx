import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GraduationCapBold } from "../bold";
import { GraduationCapDuotone } from "../duotone";
import { GraduationCapFill } from "../fill";
import { GraduationCapLight } from "../light";
import { GraduationCapRegular } from "../regular";
import { GraduationCapThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const GraduationCap = memo(function GraduationCap(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GraduationCapBold,
      duotone: GraduationCapDuotone,
      fill: GraduationCapFill,
      light: GraduationCapLight,
      regular: GraduationCapRegular,
      thin: GraduationCapThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
