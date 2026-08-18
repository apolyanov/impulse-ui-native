import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PawPrintBoldIcon } from "../bold/paw-print-bold.icon";
import { PawPrintDuotoneIcon } from "../duotone/paw-print-duotone.icon";
import { PawPrintFillIcon } from "../fill/paw-print-fill.icon";
import { PawPrintLightIcon } from "../light/paw-print-light.icon";
import { PawPrintRegularIcon } from "../regular/paw-print-regular.icon";
import { PawPrintThinIcon } from "../thin/paw-print-thin.icon";

export const PawPrintIcon = memo(function PawPrint(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PawPrintBoldIcon,
      duotone: PawPrintDuotoneIcon,
      fill: PawPrintFillIcon,
      light: PawPrintLightIcon,
      regular: PawPrintRegularIcon,
      thin: PawPrintThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
