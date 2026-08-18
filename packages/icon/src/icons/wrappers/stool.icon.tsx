import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { StoolBoldIcon } from "../bold/stool-bold.icon";
import { StoolDuotoneIcon } from "../duotone/stool-duotone.icon";
import { StoolFillIcon } from "../fill/stool-fill.icon";
import { StoolLightIcon } from "../light/stool-light.icon";
import { StoolRegularIcon } from "../regular/stool-regular.icon";
import { StoolThinIcon } from "../thin/stool-thin.icon";

export const StoolIcon = memo(function Stool(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StoolBoldIcon,
      duotone: StoolDuotoneIcon,
      fill: StoolFillIcon,
      light: StoolLightIcon,
      regular: StoolRegularIcon,
      thin: StoolThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
