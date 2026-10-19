import { createIcon } from "../../hocs/create-icon.hoc";
import { WarehouseBoldIcon } from "../bold/warehouse-bold.icon";
import { WarehouseDuotoneIcon } from "../duotone/warehouse-duotone.icon";
import { WarehouseFillIcon } from "../fill/warehouse-fill.icon";
import { WarehouseLightIcon } from "../light/warehouse-light.icon";
import { WarehouseRegularIcon } from "../regular/warehouse-regular.icon";
import { WarehouseThinIcon } from "../thin/warehouse-thin.icon";

export const WarehouseIcon = createIcon("Warehouse", {
  bold: WarehouseBoldIcon,
  duotone: WarehouseDuotoneIcon,
  fill: WarehouseFillIcon,
  light: WarehouseLightIcon,
  regular: WarehouseRegularIcon,
  thin: WarehouseThinIcon,
});
