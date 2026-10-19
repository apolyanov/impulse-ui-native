import { createIcon } from "../../hocs/create-icon.hoc";
import { FileSqlBoldIcon } from "../bold/file-sql-bold.icon";
import { FileSqlDuotoneIcon } from "../duotone/file-sql-duotone.icon";
import { FileSqlFillIcon } from "../fill/file-sql-fill.icon";
import { FileSqlLightIcon } from "../light/file-sql-light.icon";
import { FileSqlRegularIcon } from "../regular/file-sql-regular.icon";
import { FileSqlThinIcon } from "../thin/file-sql-thin.icon";

export const FileSqlIcon = createIcon("FileSql", {
  bold: FileSqlBoldIcon,
  duotone: FileSqlDuotoneIcon,
  fill: FileSqlFillIcon,
  light: FileSqlLightIcon,
  regular: FileSqlRegularIcon,
  thin: FileSqlThinIcon,
});
