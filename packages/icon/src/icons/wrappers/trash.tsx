import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TrashBold } from "../bold";
import { TrashDuotone } from "../duotone";
import { TrashFill } from "../fill";
import { TrashLight } from "../light";
import { TrashRegular } from "../regular";
import { TrashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Trash = memo(function Trash(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TrashBold,
      duotone: TrashDuotone,
      fill: TrashFill,
      light: TrashLight,
      regular: TrashRegular,
      thin: TrashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
