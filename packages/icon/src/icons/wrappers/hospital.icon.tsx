import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { HospitalBoldIcon } from "../bold";
import { HospitalDuotoneIcon } from "../duotone";
import { HospitalFillIcon } from "../fill";
import { HospitalLightIcon } from "../light";
import { HospitalRegularIcon } from "../regular";
import { HospitalThinIcon } from "../thin";

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
