import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FileSqlBoldIcon } from "../bold/file-sql-bold.icon";
import { FileSqlDuotoneIcon } from "../duotone/file-sql-duotone.icon";
import { FileSqlFillIcon } from "../fill/file-sql-fill.icon";
import { FileSqlLightIcon } from "../light/file-sql-light.icon";
import { FileSqlRegularIcon } from "../regular/file-sql-regular.icon";
import { FileSqlThinIcon } from "../thin/file-sql-thin.icon";

export const FileSqlIcon = memo(function FileSql(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileSqlBoldIcon,
      duotone: FileSqlDuotoneIcon,
      fill: FileSqlFillIcon,
      light: FileSqlLightIcon,
      regular: FileSqlRegularIcon,
      thin: FileSqlThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
