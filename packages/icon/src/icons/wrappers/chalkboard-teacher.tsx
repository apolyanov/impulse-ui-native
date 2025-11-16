import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChalkboardTeacherBold } from "../bold";
import { ChalkboardTeacherDuotone } from "../duotone";
import { ChalkboardTeacherFill } from "../fill";
import { ChalkboardTeacherLight } from "../light";
import { ChalkboardTeacherRegular } from "../regular";
import { ChalkboardTeacherThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ChalkboardTeacher = memo(function ChalkboardTeacher(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChalkboardTeacherBold,
      duotone: ChalkboardTeacherDuotone,
      fill: ChalkboardTeacherFill,
      light: ChalkboardTeacherLight,
      regular: ChalkboardTeacherRegular,
      thin: ChalkboardTeacherThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
