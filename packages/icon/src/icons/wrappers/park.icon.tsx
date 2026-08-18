import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ParkBoldIcon } from "../bold/park-bold.icon";
import { ParkDuotoneIcon } from "../duotone/park-duotone.icon";
import { ParkFillIcon } from "../fill/park-fill.icon";
import { ParkLightIcon } from "../light/park-light.icon";
import { ParkRegularIcon } from "../regular/park-regular.icon";
import { ParkThinIcon } from "../thin/park-thin.icon";

export const ParkIcon = memo(function Park(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ParkBoldIcon,
      duotone: ParkDuotoneIcon,
      fill: ParkFillIcon,
      light: ParkLightIcon,
      regular: ParkRegularIcon,
      thin: ParkThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
