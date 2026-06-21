import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileTextBoldIcon } from "../bold";
import { FileTextDuotoneIcon } from "../duotone";
import { FileTextFillIcon } from "../fill";
import { FileTextLightIcon } from "../light";
import { FileTextRegularIcon } from "../regular";
import { FileTextThinIcon } from "../thin";

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
