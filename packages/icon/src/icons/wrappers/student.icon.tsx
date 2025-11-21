import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StudentBoldIcon } from "../bold";
import { StudentDuotoneIcon } from "../duotone";
import { StudentFillIcon } from "../fill";
import { StudentLightIcon } from "../light";
import { StudentRegularIcon } from "../regular";
import { StudentThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
