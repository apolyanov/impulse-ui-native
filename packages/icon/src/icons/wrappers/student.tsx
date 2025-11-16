import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StudentBold } from "../bold";
import { StudentDuotone } from "../duotone";
import { StudentFill } from "../fill";
import { StudentLight } from "../light";
import { StudentRegular } from "../regular";
import { StudentThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Student = memo(function Student(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StudentBold,
      duotone: StudentDuotone,
      fill: StudentFill,
      light: StudentLight,
      regular: StudentRegular,
      thin: StudentThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
