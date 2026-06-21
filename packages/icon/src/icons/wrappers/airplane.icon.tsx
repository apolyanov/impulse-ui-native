import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AirplaneBoldIcon } from "../bold";
import { AirplaneDuotoneIcon } from "../duotone";
import { AirplaneFillIcon } from "../fill";
import { AirplaneLightIcon } from "../light";
import { AirplaneRegularIcon } from "../regular";
import { AirplaneThinIcon } from "../thin";

export const AirplaneIcon = memo(function Airplane(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AirplaneBoldIcon,
      duotone: AirplaneDuotoneIcon,
      fill: AirplaneFillIcon,
      light: AirplaneLightIcon,
      regular: AirplaneRegularIcon,
      thin: AirplaneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
