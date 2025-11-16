import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileTextBold } from "../bold";
import { FileTextDuotone } from "../duotone";
import { FileTextFill } from "../fill";
import { FileTextLight } from "../light";
import { FileTextRegular } from "../regular";
import { FileTextThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileText = memo(function FileText(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileTextBold,
      duotone: FileTextDuotone,
      fill: FileTextFill,
      light: FileTextLight,
      regular: FileTextRegular,
      thin: FileTextThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
