import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FilePngBoldIcon } from "../bold";
import { FilePngDuotoneIcon } from "../duotone";
import { FilePngFillIcon } from "../fill";
import { FilePngLightIcon } from "../light";
import { FilePngRegularIcon } from "../regular";
import { FilePngThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
