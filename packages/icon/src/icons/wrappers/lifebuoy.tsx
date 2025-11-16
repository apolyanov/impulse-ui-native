import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LifebuoyBold } from "../bold";
import { LifebuoyDuotone } from "../duotone";
import { LifebuoyFill } from "../fill";
import { LifebuoyLight } from "../light";
import { LifebuoyRegular } from "../regular";
import { LifebuoyThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Lifebuoy = memo(function Lifebuoy(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LifebuoyBold,
      duotone: LifebuoyDuotone,
      fill: LifebuoyFill,
      light: LifebuoyLight,
      regular: LifebuoyRegular,
      thin: LifebuoyThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
