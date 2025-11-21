import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CigaretteSlashBoldIcon } from "../bold";
import { CigaretteSlashDuotoneIcon } from "../duotone";
import { CigaretteSlashFillIcon } from "../fill";
import { CigaretteSlashLightIcon } from "../light";
import { CigaretteSlashRegularIcon } from "../regular";
import { CigaretteSlashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CigaretteSlashIcon = memo(function CigaretteSlash(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CigaretteSlashBoldIcon,
      duotone: CigaretteSlashDuotoneIcon,
      fill: CigaretteSlashFillIcon,
      light: CigaretteSlashLightIcon,
      regular: CigaretteSlashRegularIcon,
      thin: CigaretteSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
