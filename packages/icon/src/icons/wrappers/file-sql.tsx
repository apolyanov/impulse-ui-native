import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileSqlBold } from "../bold";
import { FileSqlDuotone } from "../duotone";
import { FileSqlFill } from "../fill";
import { FileSqlLight } from "../light";
import { FileSqlRegular } from "../regular";
import { FileSqlThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileSql = memo(function FileSql(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileSqlBold,
      duotone: FileSqlDuotone,
      fill: FileSqlFill,
      light: FileSqlLight,
      regular: FileSqlRegular,
      thin: FileSqlThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
