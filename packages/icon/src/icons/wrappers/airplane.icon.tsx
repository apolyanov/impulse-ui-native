import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AirplaneBoldIcon } from "../bold/airplane-bold.icon";
import { AirplaneDuotoneIcon } from "../duotone/airplane-duotone.icon";
import { AirplaneFillIcon } from "../fill/airplane-fill.icon";
import { AirplaneLightIcon } from "../light/airplane-light.icon";
import { AirplaneRegularIcon } from "../regular/airplane-regular.icon";
import { AirplaneThinIcon } from "../thin/airplane-thin.icon";

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
