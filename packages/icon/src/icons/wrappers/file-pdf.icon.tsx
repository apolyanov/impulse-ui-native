import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FilePdfBoldIcon } from "../bold";
import { FilePdfDuotoneIcon } from "../duotone";
import { FilePdfFillIcon } from "../fill";
import { FilePdfLightIcon } from "../light";
import { FilePdfRegularIcon } from "../regular";
import { FilePdfThinIcon } from "../thin";

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
