import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StudentBoldIcon } from "../bold/student-bold.icon";
import { StudentDuotoneIcon } from "../duotone/student-duotone.icon";
import { StudentFillIcon } from "../fill/student-fill.icon";
import { StudentLightIcon } from "../light/student-light.icon";
import { StudentRegularIcon } from "../regular/student-regular.icon";
import { StudentThinIcon } from "../thin/student-thin.icon";

export const StudentIcon = memo(function Student(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StudentBoldIcon,
      duotone: StudentDuotoneIcon,
      fill: StudentFillIcon,
      light: StudentLightIcon,
      regular: StudentRegularIcon,
      thin: StudentThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
