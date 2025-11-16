import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CigaretteBold } from "../bold";
import { CigaretteDuotone } from "../duotone";
import { CigaretteFill } from "../fill";
import { CigaretteLight } from "../light";
import { CigaretteRegular } from "../regular";
import { CigaretteThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cigarette = memo(function Cigarette(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CigaretteBold,
      duotone: CigaretteDuotone,
      fill: CigaretteFill,
      light: CigaretteLight,
      regular: CigaretteRegular,
      thin: CigaretteThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
