import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RowsBold } from "../bold";
import { RowsDuotone } from "../duotone";
import { RowsFill } from "../fill";
import { RowsLight } from "../light";
import { RowsRegular } from "../regular";
import { RowsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Rows = memo(function Rows(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RowsBold,
      duotone: RowsDuotone,
      fill: RowsFill,
      light: RowsLight,
      regular: RowsRegular,
      thin: RowsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
