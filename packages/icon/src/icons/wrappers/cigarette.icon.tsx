import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CigaretteBoldIcon } from "../bold";
import { CigaretteDuotoneIcon } from "../duotone";
import { CigaretteFillIcon } from "../fill";
import { CigaretteLightIcon } from "../light";
import { CigaretteRegularIcon } from "../regular";
import { CigaretteThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
