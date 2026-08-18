import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RecycleBoldIcon } from "../bold/recycle-bold.icon";
import { RecycleDuotoneIcon } from "../duotone/recycle-duotone.icon";
import { RecycleFillIcon } from "../fill/recycle-fill.icon";
import { RecycleLightIcon } from "../light/recycle-light.icon";
import { RecycleRegularIcon } from "../regular/recycle-regular.icon";
import { RecycleThinIcon } from "../thin/recycle-thin.icon";

export const RecycleIcon = memo(function Recycle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RecycleBoldIcon,
      duotone: RecycleDuotoneIcon,
      fill: RecycleFillIcon,
      light: RecycleLightIcon,
      regular: RecycleRegularIcon,
      thin: RecycleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
