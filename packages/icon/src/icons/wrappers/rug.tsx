import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RugBold } from "../bold";
import { RugDuotone } from "../duotone";
import { RugFill } from "../fill";
import { RugLight } from "../light";
import { RugRegular } from "../regular";
import { RugThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Rug = memo(function Rug(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RugBold,
      duotone: RugDuotone,
      fill: RugFill,
      light: RugLight,
      regular: RugRegular,
      thin: RugThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
