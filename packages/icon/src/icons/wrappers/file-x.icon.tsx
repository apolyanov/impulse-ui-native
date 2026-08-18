import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileXBoldIcon } from "../bold/file-x-bold.icon";
import { FileXDuotoneIcon } from "../duotone/file-x-duotone.icon";
import { FileXFillIcon } from "../fill/file-x-fill.icon";
import { FileXLightIcon } from "../light/file-x-light.icon";
import { FileXRegularIcon } from "../regular/file-x-regular.icon";
import { FileXThinIcon } from "../thin/file-x-thin.icon";

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
