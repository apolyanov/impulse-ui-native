import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TaxiBold } from "../bold";
import { TaxiDuotone } from "../duotone";
import { TaxiFill } from "../fill";
import { TaxiLight } from "../light";
import { TaxiRegular } from "../regular";
import { TaxiThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Taxi = memo(function Taxi(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TaxiBold,
      duotone: TaxiDuotone,
      fill: TaxiFill,
      light: TaxiLight,
      regular: TaxiRegular,
      thin: TaxiThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
