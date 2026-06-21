import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PrescriptionBoldIcon } from "../bold";
import { PrescriptionDuotoneIcon } from "../duotone";
import { PrescriptionFillIcon } from "../fill";
import { PrescriptionLightIcon } from "../light";
import { PrescriptionRegularIcon } from "../regular";
import { PrescriptionThinIcon } from "../thin";

export const PrescriptionIcon = memo(function Prescription(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PrescriptionBoldIcon,
      duotone: PrescriptionDuotoneIcon,
      fill: PrescriptionFillIcon,
      light: PrescriptionLightIcon,
      regular: PrescriptionRegularIcon,
      thin: PrescriptionThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
