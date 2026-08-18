import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChalkboardTeacherBoldIcon } from "../bold/chalkboard-teacher-bold.icon";
import { ChalkboardTeacherDuotoneIcon } from "../duotone/chalkboard-teacher-duotone.icon";
import { ChalkboardTeacherFillIcon } from "../fill/chalkboard-teacher-fill.icon";
import { ChalkboardTeacherLightIcon } from "../light/chalkboard-teacher-light.icon";
import { ChalkboardTeacherRegularIcon } from "../regular/chalkboard-teacher-regular.icon";
import { ChalkboardTeacherThinIcon } from "../thin/chalkboard-teacher-thin.icon";

export const ChalkboardTeacherIcon = memo(function ChalkboardTeacher(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChalkboardTeacherBoldIcon,
      duotone: ChalkboardTeacherDuotoneIcon,
      fill: ChalkboardTeacherFillIcon,
      light: ChalkboardTeacherLightIcon,
      regular: ChalkboardTeacherRegularIcon,
      thin: ChalkboardTeacherThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
