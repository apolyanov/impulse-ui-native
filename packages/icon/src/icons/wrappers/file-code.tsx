import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileCodeBold } from "../bold";
import { FileCodeDuotone } from "../duotone";
import { FileCodeFill } from "../fill";
import { FileCodeLight } from "../light";
import { FileCodeRegular } from "../regular";
import { FileCodeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileCode = memo(function FileCode(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileCodeBold,
      duotone: FileCodeDuotone,
      fill: FileCodeFill,
      light: FileCodeLight,
      regular: FileCodeRegular,
      thin: FileCodeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
