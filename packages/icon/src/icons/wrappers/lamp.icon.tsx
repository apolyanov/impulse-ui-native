import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LampBoldIcon } from "../bold/lamp-bold.icon";
import { LampDuotoneIcon } from "../duotone/lamp-duotone.icon";
import { LampFillIcon } from "../fill/lamp-fill.icon";
import { LampLightIcon } from "../light/lamp-light.icon";
import { LampRegularIcon } from "../regular/lamp-regular.icon";
import { LampThinIcon } from "../thin/lamp-thin.icon";

export const LampIcon = memo(function Lamp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LampBoldIcon,
      duotone: LampDuotoneIcon,
      fill: LampFillIcon,
      light: LampLightIcon,
      regular: LampRegularIcon,
      thin: LampThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
