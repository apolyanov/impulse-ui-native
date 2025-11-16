import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileXBold } from "../bold";
import { FileXDuotone } from "../duotone";
import { FileXFill } from "../fill";
import { FileXLight } from "../light";
import { FileXRegular } from "../regular";
import { FileXThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileX = memo(function FileX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileXBold,
      duotone: FileXDuotone,
      fill: FileXFill,
      light: FileXLight,
      regular: FileXRegular,
      thin: FileXThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
