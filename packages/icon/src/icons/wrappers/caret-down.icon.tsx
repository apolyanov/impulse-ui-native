import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CaretDownBoldIcon } from "../bold/caret-down-bold.icon";
import { CaretDownDuotoneIcon } from "../duotone/caret-down-duotone.icon";
import { CaretDownFillIcon } from "../fill/caret-down-fill.icon";
import { CaretDownLightIcon } from "../light/caret-down-light.icon";
import { CaretDownRegularIcon } from "../regular/caret-down-regular.icon";
import { CaretDownThinIcon } from "../thin/caret-down-thin.icon";

export const CaretDownIcon = memo(function CaretDown(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CaretDownBoldIcon,
      duotone: CaretDownDuotoneIcon,
      fill: CaretDownFillIcon,
      light: CaretDownLightIcon,
      regular: CaretDownRegularIcon,
      thin: CaretDownThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
