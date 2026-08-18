import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileJsxBoldIcon } from "../bold/file-jsx-bold.icon";
import { FileJsxDuotoneIcon } from "../duotone/file-jsx-duotone.icon";
import { FileJsxFillIcon } from "../fill/file-jsx-fill.icon";
import { FileJsxLightIcon } from "../light/file-jsx-light.icon";
import { FileJsxRegularIcon } from "../regular/file-jsx-regular.icon";
import { FileJsxThinIcon } from "../thin/file-jsx-thin.icon";

export const FileJsxIcon = memo(function FileJsx(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileJsxBoldIcon,
      duotone: FileJsxDuotoneIcon,
      fill: FileJsxFillIcon,
      light: FileJsxLightIcon,
      regular: FileJsxRegularIcon,
      thin: FileJsxThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
