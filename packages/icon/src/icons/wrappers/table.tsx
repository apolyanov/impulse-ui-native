import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TableBold } from "../bold";
import { TableDuotone } from "../duotone";
import { TableFill } from "../fill";
import { TableLight } from "../light";
import { TableRegular } from "../regular";
import { TableThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Table = memo(function Table(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TableBold,
      duotone: TableDuotone,
      fill: TableFill,
      light: TableLight,
      regular: TableRegular,
      thin: TableThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
