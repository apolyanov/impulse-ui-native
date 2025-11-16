import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CaretDownBold } from "../bold";
import { CaretDownDuotone } from "../duotone";
import { CaretDownFill } from "../fill";
import { CaretDownLight } from "../light";
import { CaretDownRegular } from "../regular";
import { CaretDownThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CaretDown = memo(function CaretDown(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretDownBold,
      duotone: CaretDownDuotone,
      fill: CaretDownFill,
      light: CaretDownLight,
      regular: CaretDownRegular,
      thin: CaretDownThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
