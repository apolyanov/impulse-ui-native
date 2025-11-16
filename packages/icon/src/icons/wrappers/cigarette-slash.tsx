import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CigaretteSlashBold } from "../bold";
import { CigaretteSlashDuotone } from "../duotone";
import { CigaretteSlashFill } from "../fill";
import { CigaretteSlashLight } from "../light";
import { CigaretteSlashRegular } from "../regular";
import { CigaretteSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CigaretteSlash = memo(function CigaretteSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CigaretteSlashBold,
      duotone: CigaretteSlashDuotone,
      fill: CigaretteSlashFill,
      light: CigaretteSlashLight,
      regular: CigaretteSlashRegular,
      thin: CigaretteSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
