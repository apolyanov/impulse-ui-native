import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RecycleBold } from "../bold";
import { RecycleDuotone } from "../duotone";
import { RecycleFill } from "../fill";
import { RecycleLight } from "../light";
import { RecycleRegular } from "../regular";
import { RecycleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Recycle = memo(function Recycle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RecycleBold,
      duotone: RecycleDuotone,
      fill: RecycleFill,
      light: RecycleLight,
      regular: RecycleRegular,
      thin: RecycleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
