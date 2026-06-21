import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PawPrintBoldIcon } from "../bold";
import { PawPrintDuotoneIcon } from "../duotone";
import { PawPrintFillIcon } from "../fill";
import { PawPrintLightIcon } from "../light";
import { PawPrintRegularIcon } from "../regular";
import { PawPrintThinIcon } from "../thin";

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
