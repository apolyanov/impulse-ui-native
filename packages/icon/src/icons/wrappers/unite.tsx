import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UniteBold } from "../bold";
import { UniteDuotone } from "../duotone";
import { UniteFill } from "../fill";
import { UniteLight } from "../light";
import { UniteRegular } from "../regular";
import { UniteThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Unite = memo(function Unite(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UniteBold,
      duotone: UniteDuotone,
      fill: UniteFill,
      light: UniteLight,
      regular: UniteRegular,
      thin: UniteThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
