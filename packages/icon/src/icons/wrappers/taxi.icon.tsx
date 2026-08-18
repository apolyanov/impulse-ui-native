import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TaxiBoldIcon } from "../bold/taxi-bold.icon";
import { TaxiDuotoneIcon } from "../duotone/taxi-duotone.icon";
import { TaxiFillIcon } from "../fill/taxi-fill.icon";
import { TaxiLightIcon } from "../light/taxi-light.icon";
import { TaxiRegularIcon } from "../regular/taxi-regular.icon";
import { TaxiThinIcon } from "../thin/taxi-thin.icon";

export const TaxiIcon = memo(function Taxi(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TaxiBoldIcon,
      duotone: TaxiDuotoneIcon,
      fill: TaxiFillIcon,
      light: TaxiLightIcon,
      regular: TaxiRegularIcon,
      thin: TaxiThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
