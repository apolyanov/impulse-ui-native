import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PiBoldIcon } from "../bold/pi-bold.icon";
import { PiDuotoneIcon } from "../duotone/pi-duotone.icon";
import { PiFillIcon } from "../fill/pi-fill.icon";
import { PiLightIcon } from "../light/pi-light.icon";
import { PiRegularIcon } from "../regular/pi-regular.icon";
import { PiThinIcon } from "../thin/pi-thin.icon";

export const PiIcon = memo(function Pi(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PiBoldIcon,
      duotone: PiDuotoneIcon,
      fill: PiFillIcon,
      light: PiLightIcon,
      regular: PiRegularIcon,
      thin: PiThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
