import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PrescriptionBold } from "../bold";
import { PrescriptionDuotone } from "../duotone";
import { PrescriptionFill } from "../fill";
import { PrescriptionLight } from "../light";
import { PrescriptionRegular } from "../regular";
import { PrescriptionThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Prescription = memo(function Prescription(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PrescriptionBold,
      duotone: PrescriptionDuotone,
      fill: PrescriptionFill,
      light: PrescriptionLight,
      regular: PrescriptionRegular,
      thin: PrescriptionThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
