import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AlienBold } from "../bold";
import { AlienDuotone } from "../duotone";
import { AlienFill } from "../fill";
import { AlienLight } from "../light";
import { AlienRegular } from "../regular";
import { AlienThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Alien = memo(function Alien(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AlienBold,
      duotone: AlienDuotone,
      fill: AlienFill,
      light: AlienLight,
      regular: AlienRegular,
      thin: AlienThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
