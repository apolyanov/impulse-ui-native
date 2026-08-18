import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PantsBoldIcon } from "../bold/pants-bold.icon";
import { PantsDuotoneIcon } from "../duotone/pants-duotone.icon";
import { PantsFillIcon } from "../fill/pants-fill.icon";
import { PantsLightIcon } from "../light/pants-light.icon";
import { PantsRegularIcon } from "../regular/pants-regular.icon";
import { PantsThinIcon } from "../thin/pants-thin.icon";

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
