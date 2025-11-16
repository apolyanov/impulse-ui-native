import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HospitalBold } from "../bold";
import { HospitalDuotone } from "../duotone";
import { HospitalFill } from "../fill";
import { HospitalLight } from "../light";
import { HospitalRegular } from "../regular";
import { HospitalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Hospital = memo(function Hospital(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HospitalBold,
      duotone: HospitalDuotone,
      fill: HospitalFill,
      light: HospitalLight,
      regular: HospitalRegular,
      thin: HospitalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
