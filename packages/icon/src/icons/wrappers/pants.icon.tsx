import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PantsBoldIcon } from "../bold";
import { PantsDuotoneIcon } from "../duotone";
import { PantsFillIcon } from "../fill";
import { PantsLightIcon } from "../light";
import { PantsRegularIcon } from "../regular";
import { PantsThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PantsIcon = memo(function Pants(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PantsBoldIcon,
      duotone: PantsDuotoneIcon,
      fill: PantsFillIcon,
      light: PantsLightIcon,
      regular: PantsRegularIcon,
      thin: PantsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
