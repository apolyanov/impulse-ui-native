import { createIcon } from "../../hocs/create-icon.hoc";
import { DatabaseBoldIcon } from "../bold/database-bold.icon";
import { DatabaseDuotoneIcon } from "../duotone/database-duotone.icon";
import { DatabaseFillIcon } from "../fill/database-fill.icon";
import { DatabaseLightIcon } from "../light/database-light.icon";
import { DatabaseRegularIcon } from "../regular/database-regular.icon";
import { DatabaseThinIcon } from "../thin/database-thin.icon";

export const DatabaseIcon = createIcon("Database", {
  bold: DatabaseBoldIcon,
  duotone: DatabaseDuotoneIcon,
  fill: DatabaseFillIcon,
  light: DatabaseLightIcon,
  regular: DatabaseRegularIcon,
  thin: DatabaseThinIcon,
});
