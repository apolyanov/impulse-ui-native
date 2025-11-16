import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BroomBold } from "../bold";
import { BroomDuotone } from "../duotone";
import { BroomFill } from "../fill";
import { BroomLight } from "../light";
import { BroomRegular } from "../regular";
import { BroomThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Broom = memo(function Broom(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BroomBold,
      duotone: BroomDuotone,
      fill: BroomFill,
      light: BroomLight,
      regular: BroomRegular,
      thin: BroomThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
