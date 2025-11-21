import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileXBoldIcon } from "../bold";
import { FileXDuotoneIcon } from "../duotone";
import { FileXFillIcon } from "../fill";
import { FileXLightIcon } from "../light";
import { FileXRegularIcon } from "../regular";
import { FileXThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileXIcon = memo(function FileX(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileXBoldIcon,
      duotone: FileXDuotoneIcon,
      fill: FileXFillIcon,
      light: FileXLightIcon,
      regular: FileXRegularIcon,
      thin: FileXThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
