import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PrescriptionBoldIcon } from "../bold/prescription-bold.icon";
import { PrescriptionDuotoneIcon } from "../duotone/prescription-duotone.icon";
import { PrescriptionFillIcon } from "../fill/prescription-fill.icon";
import { PrescriptionLightIcon } from "../light/prescription-light.icon";
import { PrescriptionRegularIcon } from "../regular/prescription-regular.icon";
import { PrescriptionThinIcon } from "../thin/prescription-thin.icon";

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
