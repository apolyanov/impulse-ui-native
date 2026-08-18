import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileTextBoldIcon } from "../bold/file-text-bold.icon";
import { FileTextDuotoneIcon } from "../duotone/file-text-duotone.icon";
import { FileTextFillIcon } from "../fill/file-text-fill.icon";
import { FileTextLightIcon } from "../light/file-text-light.icon";
import { FileTextRegularIcon } from "../regular/file-text-regular.icon";
import { FileTextThinIcon } from "../thin/file-text-thin.icon";

export const FileTextIcon = memo(function FileText(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileTextBoldIcon,
      duotone: FileTextDuotoneIcon,
      fill: FileTextFillIcon,
      light: FileTextLightIcon,
      regular: FileTextRegularIcon,
      thin: FileTextThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
