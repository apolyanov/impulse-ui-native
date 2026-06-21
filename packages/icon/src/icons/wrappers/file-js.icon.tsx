import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileJsBoldIcon } from "../bold";
import { FileJsDuotoneIcon } from "../duotone";
import { FileJsFillIcon } from "../fill";
import { FileJsLightIcon } from "../light";
import { FileJsRegularIcon } from "../regular";
import { FileJsThinIcon } from "../thin";

export const FileJsIcon = memo(function FileJs(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileJsBoldIcon,
      duotone: FileJsDuotoneIcon,
      fill: FileJsFillIcon,
      light: FileJsLightIcon,
      regular: FileJsRegularIcon,
      thin: FileJsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
