import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileCodeBoldIcon } from "../bold/file-code-bold.icon";
import { FileCodeDuotoneIcon } from "../duotone/file-code-duotone.icon";
import { FileCodeFillIcon } from "../fill/file-code-fill.icon";
import { FileCodeLightIcon } from "../light/file-code-light.icon";
import { FileCodeRegularIcon } from "../regular/file-code-regular.icon";
import { FileCodeThinIcon } from "../thin/file-code-thin.icon";

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
