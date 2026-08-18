import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AlienBoldIcon } from "../bold/alien-bold.icon";
import { AlienDuotoneIcon } from "../duotone/alien-duotone.icon";
import { AlienFillIcon } from "../fill/alien-fill.icon";
import { AlienLightIcon } from "../light/alien-light.icon";
import { AlienRegularIcon } from "../regular/alien-regular.icon";
import { AlienThinIcon } from "../thin/alien-thin.icon";

export const AlienIcon = memo(function Alien(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlienBoldIcon,
      duotone: AlienDuotoneIcon,
      fill: AlienFillIcon,
      light: AlienLightIcon,
      regular: AlienRegularIcon,
      thin: AlienThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
