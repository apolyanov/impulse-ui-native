import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrashBoldIcon } from "../bold";
import { TrashDuotoneIcon } from "../duotone";
import { TrashFillIcon } from "../fill";
import { TrashLightIcon } from "../light";
import { TrashRegularIcon } from "../regular";
import { TrashThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TrashIcon = memo(function Trash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrashBoldIcon,
      duotone: TrashDuotoneIcon,
      fill: TrashFillIcon,
      light: TrashLightIcon,
      regular: TrashRegularIcon,
      thin: TrashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
