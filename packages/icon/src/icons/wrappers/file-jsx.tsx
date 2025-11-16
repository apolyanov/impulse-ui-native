import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileJsxBold } from "../bold";
import { FileJsxDuotone } from "../duotone";
import { FileJsxFill } from "../fill";
import { FileJsxLight } from "../light";
import { FileJsxRegular } from "../regular";
import { FileJsxThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileJsx = memo(function FileJsx(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileJsxBold,
      duotone: FileJsxDuotone,
      fill: FileJsxFill,
      light: FileJsxLight,
      regular: FileJsxRegular,
      thin: FileJsxThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
