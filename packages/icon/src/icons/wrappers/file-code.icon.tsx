import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileCodeBoldIcon } from "../bold";
import { FileCodeDuotoneIcon } from "../duotone";
import { FileCodeFillIcon } from "../fill";
import { FileCodeLightIcon } from "../light";
import { FileCodeRegularIcon } from "../regular";
import { FileCodeThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileCodeIcon = memo(function FileCode(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileCodeBoldIcon,
      duotone: FileCodeDuotoneIcon,
      fill: FileCodeFillIcon,
      light: FileCodeLightIcon,
      regular: FileCodeRegularIcon,
      thin: FileCodeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
