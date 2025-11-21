import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LampBoldIcon } from "../bold";
import { LampDuotoneIcon } from "../duotone";
import { LampFillIcon } from "../fill";
import { LampLightIcon } from "../light";
import { LampRegularIcon } from "../regular";
import { LampThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
