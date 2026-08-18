import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { BroomBoldIcon } from "../bold/broom-bold.icon";
import { BroomDuotoneIcon } from "../duotone/broom-duotone.icon";
import { BroomFillIcon } from "../fill/broom-fill.icon";
import { BroomLightIcon } from "../light/broom-light.icon";
import { BroomRegularIcon } from "../regular/broom-regular.icon";
import { BroomThinIcon } from "../thin/broom-thin.icon";

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
