import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CigaretteSlashBoldIcon } from "../bold/cigarette-slash-bold.icon";
import { CigaretteSlashDuotoneIcon } from "../duotone/cigarette-slash-duotone.icon";
import { CigaretteSlashFillIcon } from "../fill/cigarette-slash-fill.icon";
import { CigaretteSlashLightIcon } from "../light/cigarette-slash-light.icon";
import { CigaretteSlashRegularIcon } from "../regular/cigarette-slash-regular.icon";
import { CigaretteSlashThinIcon } from "../thin/cigarette-slash-thin.icon";

export const CigaretteSlashIcon = memo(function CigaretteSlash(
  props: IconWrapperProps,
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
