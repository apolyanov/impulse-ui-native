import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FilePdfBoldIcon } from "../bold/file-pdf-bold.icon";
import { FilePdfDuotoneIcon } from "../duotone/file-pdf-duotone.icon";
import { FilePdfFillIcon } from "../fill/file-pdf-fill.icon";
import { FilePdfLightIcon } from "../light/file-pdf-light.icon";
import { FilePdfRegularIcon } from "../regular/file-pdf-regular.icon";
import { FilePdfThinIcon } from "../thin/file-pdf-thin.icon";

export const FilePdfIcon = memo(function FilePdf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilePdfBoldIcon,
      duotone: FilePdfDuotoneIcon,
      fill: FilePdfFillIcon,
      light: FilePdfLightIcon,
      regular: FilePdfRegularIcon,
      thin: FilePdfThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
