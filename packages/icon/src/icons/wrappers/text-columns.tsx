import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextColumnsBold } from "../bold";
import { TextColumnsDuotone } from "../duotone";
import { TextColumnsFill } from "../fill";
import { TextColumnsLight } from "../light";
import { TextColumnsRegular } from "../regular";
import { TextColumnsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextColumns = memo(function TextColumns(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextColumnsBold,
      duotone: TextColumnsDuotone,
      fill: TextColumnsFill,
      light: TextColumnsLight,
      regular: TextColumnsRegular,
      thin: TextColumnsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
