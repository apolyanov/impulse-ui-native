import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PawPrintBold } from "../bold";
import { PawPrintDuotone } from "../duotone";
import { PawPrintFill } from "../fill";
import { PawPrintLight } from "../light";
import { PawPrintRegular } from "../regular";
import { PawPrintThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const PawPrint = memo(function PawPrint(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PawPrintBold,
      duotone: PawPrintDuotone,
      fill: PawPrintFill,
      light: PawPrintLight,
      regular: PawPrintRegular,
      thin: PawPrintThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
