import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileMinusBold } from "../bold";
import { FileMinusDuotone } from "../duotone";
import { FileMinusFill } from "../fill";
import { FileMinusLight } from "../light";
import { FileMinusRegular } from "../regular";
import { FileMinusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileMinus = memo(function FileMinus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileMinusBold,
      duotone: FileMinusDuotone,
      fill: FileMinusFill,
      light: FileMinusLight,
      regular: FileMinusRegular,
      thin: FileMinusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
