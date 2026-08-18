import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CastleTurretBoldIcon } from "../bold/castle-turret-bold.icon";
import { CastleTurretDuotoneIcon } from "../duotone/castle-turret-duotone.icon";
import { CastleTurretFillIcon } from "../fill/castle-turret-fill.icon";
import { CastleTurretLightIcon } from "../light/castle-turret-light.icon";
import { CastleTurretRegularIcon } from "../regular/castle-turret-regular.icon";
import { CastleTurretThinIcon } from "../thin/castle-turret-thin.icon";

export const CastleTurretIcon = memo(function CastleTurret(
  props: IconWrapperProps,
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
