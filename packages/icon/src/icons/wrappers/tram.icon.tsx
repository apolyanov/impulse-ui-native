import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TramBoldIcon } from "../bold/tram-bold.icon";
import { TramDuotoneIcon } from "../duotone/tram-duotone.icon";
import { TramFillIcon } from "../fill/tram-fill.icon";
import { TramLightIcon } from "../light/tram-light.icon";
import { TramRegularIcon } from "../regular/tram-regular.icon";
import { TramThinIcon } from "../thin/tram-thin.icon";

export const TramIcon = memo(function Tram(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TramBoldIcon,
      duotone: TramDuotoneIcon,
      fill: TramFillIcon,
      light: TramLightIcon,
      regular: TramRegularIcon,
      thin: TramThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
