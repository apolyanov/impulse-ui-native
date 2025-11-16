import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SirenBold } from "../bold";
import { SirenDuotone } from "../duotone";
import { SirenFill } from "../fill";
import { SirenLight } from "../light";
import { SirenRegular } from "../regular";
import { SirenThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Siren = memo(function Siren(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SirenBold,
      duotone: SirenDuotone,
      fill: SirenFill,
      light: SirenLight,
      regular: SirenRegular,
      thin: SirenThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
