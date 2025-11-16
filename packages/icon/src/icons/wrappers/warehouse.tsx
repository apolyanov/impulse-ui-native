import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WarehouseBold } from "../bold";
import { WarehouseDuotone } from "../duotone";
import { WarehouseFill } from "../fill";
import { WarehouseLight } from "../light";
import { WarehouseRegular } from "../regular";
import { WarehouseThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Warehouse = memo(function Warehouse(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WarehouseBold,
      duotone: WarehouseDuotone,
      fill: WarehouseFill,
      light: WarehouseLight,
      regular: WarehouseRegular,
      thin: WarehouseThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
