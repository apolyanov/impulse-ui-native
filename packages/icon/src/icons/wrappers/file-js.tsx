import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileJsBold } from "../bold";
import { FileJsDuotone } from "../duotone";
import { FileJsFill } from "../fill";
import { FileJsLight } from "../light";
import { FileJsRegular } from "../regular";
import { FileJsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileJs = memo(function FileJs(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileJsBold,
      duotone: FileJsDuotone,
      fill: FileJsFill,
      light: FileJsLight,
      regular: FileJsRegular,
      thin: FileJsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
