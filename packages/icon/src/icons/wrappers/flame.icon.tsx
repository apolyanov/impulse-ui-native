import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlameBoldIcon } from "../bold";
import { FlameDuotoneIcon } from "../duotone";
import { FlameFillIcon } from "../fill";
import { FlameLightIcon } from "../light";
import { FlameRegularIcon } from "../regular";
import { FlameThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FlameIcon = memo(function Flame(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlameBoldIcon,
      duotone: FlameDuotoneIcon,
      fill: FlameFillIcon,
      light: FlameLightIcon,
      regular: FlameRegularIcon,
      thin: FlameThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
