import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlameBoldIcon } from "../bold/flame-bold.icon";
import { FlameDuotoneIcon } from "../duotone/flame-duotone.icon";
import { FlameFillIcon } from "../fill/flame-fill.icon";
import { FlameLightIcon } from "../light/flame-light.icon";
import { FlameRegularIcon } from "../regular/flame-regular.icon";
import { FlameThinIcon } from "../thin/flame-thin.icon";

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
