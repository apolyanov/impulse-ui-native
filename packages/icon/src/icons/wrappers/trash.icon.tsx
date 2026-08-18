import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TrashBoldIcon } from "../bold/trash-bold.icon";
import { TrashDuotoneIcon } from "../duotone/trash-duotone.icon";
import { TrashFillIcon } from "../fill/trash-fill.icon";
import { TrashLightIcon } from "../light/trash-light.icon";
import { TrashRegularIcon } from "../regular/trash-regular.icon";
import { TrashThinIcon } from "../thin/trash-thin.icon";

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
