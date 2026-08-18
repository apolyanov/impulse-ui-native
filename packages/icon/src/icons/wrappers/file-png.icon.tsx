import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FilePngBoldIcon } from "../bold/file-png-bold.icon";
import { FilePngDuotoneIcon } from "../duotone/file-png-duotone.icon";
import { FilePngFillIcon } from "../fill/file-png-fill.icon";
import { FilePngLightIcon } from "../light/file-png-light.icon";
import { FilePngRegularIcon } from "../regular/file-png-regular.icon";
import { FilePngThinIcon } from "../thin/file-png-thin.icon";

export const FilePngIcon = memo(function FilePng(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FilePngBoldIcon,
      duotone: FilePngDuotoneIcon,
      fill: FilePngFillIcon,
      light: FilePngLightIcon,
      regular: FilePngRegularIcon,
      thin: FilePngThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
