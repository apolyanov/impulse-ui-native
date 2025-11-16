import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FilePdfBold } from "../bold";
import { FilePdfDuotone } from "../duotone";
import { FilePdfFill } from "../fill";
import { FilePdfLight } from "../light";
import { FilePdfRegular } from "../regular";
import { FilePdfThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FilePdf = memo(function FilePdf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilePdfBold,
      duotone: FilePdfDuotone,
      fill: FilePdfFill,
      light: FilePdfLight,
      regular: FilePdfRegular,
      thin: FilePdfThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
