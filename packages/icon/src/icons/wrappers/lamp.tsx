import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LampBold } from "../bold";
import { LampDuotone } from "../duotone";
import { LampFill } from "../fill";
import { LampLight } from "../light";
import { LampRegular } from "../regular";
import { LampThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Lamp = memo(function Lamp(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LampBold,
      duotone: LampDuotone,
      fill: LampFill,
      light: LampLight,
      regular: LampRegular,
      thin: LampThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
