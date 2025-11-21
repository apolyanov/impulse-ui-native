import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CastleTurretBoldIcon } from "../bold";
import { CastleTurretDuotoneIcon } from "../duotone";
import { CastleTurretFillIcon } from "../fill";
import { CastleTurretLightIcon } from "../light";
import { CastleTurretRegularIcon } from "../regular";
import { CastleTurretThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CastleTurretIcon = memo(function CastleTurret(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CastleTurretBoldIcon,
      duotone: CastleTurretDuotoneIcon,
      fill: CastleTurretFillIcon,
      light: CastleTurretLightIcon,
      regular: CastleTurretRegularIcon,
      thin: CastleTurretThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
