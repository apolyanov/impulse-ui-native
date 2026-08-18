import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ControlBoldIcon } from "../bold/control-bold.icon";
import { ControlDuotoneIcon } from "../duotone/control-duotone.icon";
import { ControlFillIcon } from "../fill/control-fill.icon";
import { ControlLightIcon } from "../light/control-light.icon";
import { ControlRegularIcon } from "../regular/control-regular.icon";
import { ControlThinIcon } from "../thin/control-thin.icon";

export const ControlIcon = memo(function Control(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ControlBoldIcon,
      duotone: ControlDuotoneIcon,
      fill: ControlFillIcon,
      light: ControlLightIcon,
      regular: ControlRegularIcon,
      thin: ControlThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
