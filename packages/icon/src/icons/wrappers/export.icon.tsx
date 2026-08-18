import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ExportBoldIcon } from "../bold/export-bold.icon";
import { ExportDuotoneIcon } from "../duotone/export-duotone.icon";
import { ExportFillIcon } from "../fill/export-fill.icon";
import { ExportLightIcon } from "../light/export-light.icon";
import { ExportRegularIcon } from "../regular/export-regular.icon";
import { ExportThinIcon } from "../thin/export-thin.icon";

export const ExportIcon = memo(function Export(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ExportBoldIcon,
      duotone: ExportDuotoneIcon,
      fill: ExportFillIcon,
      light: ExportLightIcon,
      regular: ExportRegularIcon,
      thin: ExportThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
