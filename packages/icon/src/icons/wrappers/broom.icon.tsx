import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BroomBoldIcon } from "../bold";
import { BroomDuotoneIcon } from "../duotone";
import { BroomFillIcon } from "../fill";
import { BroomLightIcon } from "../light";
import { BroomRegularIcon } from "../regular";
import { BroomThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BroomIcon = memo(function Broom(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BroomBoldIcon,
      duotone: BroomDuotoneIcon,
      fill: BroomFillIcon,
      light: BroomLightIcon,
      regular: BroomRegularIcon,
      thin: BroomThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
