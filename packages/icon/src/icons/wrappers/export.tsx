import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ExportBold } from "../bold";
import { ExportDuotone } from "../duotone";
import { ExportFill } from "../fill";
import { ExportLight } from "../light";
import { ExportRegular } from "../regular";
import { ExportThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Export = memo(function Export(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ExportBold,
      duotone: ExportDuotone,
      fill: ExportFill,
      light: ExportLight,
      regular: ExportRegular,
      thin: ExportThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
