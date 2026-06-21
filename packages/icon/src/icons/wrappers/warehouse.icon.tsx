import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { WarehouseBoldIcon } from "../bold";
import { WarehouseDuotoneIcon } from "../duotone";
import { WarehouseFillIcon } from "../fill";
import { WarehouseLightIcon } from "../light";
import { WarehouseRegularIcon } from "../regular";
import { WarehouseThinIcon } from "../thin";

export const WarehouseIcon = memo(function Warehouse(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WarehouseBoldIcon,
      duotone: WarehouseDuotoneIcon,
      fill: WarehouseFillIcon,
      light: WarehouseLightIcon,
      regular: WarehouseRegularIcon,
      thin: WarehouseThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
