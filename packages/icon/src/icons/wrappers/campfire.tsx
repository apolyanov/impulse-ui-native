import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CampfireBold } from "../bold";
import { CampfireDuotone } from "../duotone";
import { CampfireFill } from "../fill";
import { CampfireLight } from "../light";
import { CampfireRegular } from "../regular";
import { CampfireThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Campfire = memo(function Campfire(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CampfireBold,
      duotone: CampfireDuotone,
      fill: CampfireFill,
      light: CampfireLight,
      regular: CampfireRegular,
      thin: CampfireThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
