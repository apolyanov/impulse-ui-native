import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SkullBoldIcon } from "../bold/skull-bold.icon";
import { SkullDuotoneIcon } from "../duotone/skull-duotone.icon";
import { SkullFillIcon } from "../fill/skull-fill.icon";
import { SkullLightIcon } from "../light/skull-light.icon";
import { SkullRegularIcon } from "../regular/skull-regular.icon";
import { SkullThinIcon } from "../thin/skull-thin.icon";

export const SkullIcon = memo(function Skull(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SkullBoldIcon,
      duotone: SkullDuotoneIcon,
      fill: SkullFillIcon,
      light: SkullLightIcon,
      regular: SkullRegularIcon,
      thin: SkullThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
