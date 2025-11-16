import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CastleTurretBold } from "../bold";
import { CastleTurretDuotone } from "../duotone";
import { CastleTurretFill } from "../fill";
import { CastleTurretLight } from "../light";
import { CastleTurretRegular } from "../regular";
import { CastleTurretThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CastleTurret = memo(function CastleTurret(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CastleTurretBold,
      duotone: CastleTurretDuotone,
      fill: CastleTurretFill,
      light: CastleTurretLight,
      regular: CastleTurretRegular,
      thin: CastleTurretThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
