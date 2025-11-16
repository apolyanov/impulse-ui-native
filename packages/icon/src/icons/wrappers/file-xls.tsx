import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileXlsBold } from "../bold";
import { FileXlsDuotone } from "../duotone";
import { FileXlsFill } from "../fill";
import { FileXlsLight } from "../light";
import { FileXlsRegular } from "../regular";
import { FileXlsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileXls = memo(function FileXls(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileXlsBold,
      duotone: FileXlsDuotone,
      fill: FileXlsFill,
      light: FileXlsLight,
      regular: FileXlsRegular,
      thin: FileXlsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
