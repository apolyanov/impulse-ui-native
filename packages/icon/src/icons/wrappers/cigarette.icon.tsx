import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CigaretteBoldIcon } from "../bold/cigarette-bold.icon";
import { CigaretteDuotoneIcon } from "../duotone/cigarette-duotone.icon";
import { CigaretteFillIcon } from "../fill/cigarette-fill.icon";
import { CigaretteLightIcon } from "../light/cigarette-light.icon";
import { CigaretteRegularIcon } from "../regular/cigarette-regular.icon";
import { CigaretteThinIcon } from "../thin/cigarette-thin.icon";

export const CigaretteIcon = memo(function Cigarette(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CigaretteBoldIcon,
      duotone: CigaretteDuotoneIcon,
      fill: CigaretteFillIcon,
      light: CigaretteLightIcon,
      regular: CigaretteRegularIcon,
      thin: CigaretteThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
