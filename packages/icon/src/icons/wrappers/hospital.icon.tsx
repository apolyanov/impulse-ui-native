import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HospitalBoldIcon } from "../bold/hospital-bold.icon";
import { HospitalDuotoneIcon } from "../duotone/hospital-duotone.icon";
import { HospitalFillIcon } from "../fill/hospital-fill.icon";
import { HospitalLightIcon } from "../light/hospital-light.icon";
import { HospitalRegularIcon } from "../regular/hospital-regular.icon";
import { HospitalThinIcon } from "../thin/hospital-thin.icon";

export const HospitalIcon = memo(function Hospital(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HospitalBoldIcon,
      duotone: HospitalDuotoneIcon,
      fill: HospitalFillIcon,
      light: HospitalLightIcon,
      regular: HospitalRegularIcon,
      thin: HospitalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
