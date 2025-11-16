import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TipiBold } from "../bold";
import { TipiDuotone } from "../duotone";
import { TipiFill } from "../fill";
import { TipiLight } from "../light";
import { TipiRegular } from "../regular";
import { TipiThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Tipi = memo(function Tipi(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TipiBold,
      duotone: TipiDuotone,
      fill: TipiFill,
      light: TipiLight,
      regular: TipiRegular,
      thin: TipiThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
