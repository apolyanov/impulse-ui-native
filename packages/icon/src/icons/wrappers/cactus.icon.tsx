import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CactusBoldIcon } from "../bold/cactus-bold.icon";
import { CactusDuotoneIcon } from "../duotone/cactus-duotone.icon";
import { CactusFillIcon } from "../fill/cactus-fill.icon";
import { CactusLightIcon } from "../light/cactus-light.icon";
import { CactusRegularIcon } from "../regular/cactus-regular.icon";
import { CactusThinIcon } from "../thin/cactus-thin.icon";

export const CactusIcon = memo(function Cactus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CactusBoldIcon,
      duotone: CactusDuotoneIcon,
      fill: CactusFillIcon,
      light: CactusLightIcon,
      regular: CactusRegularIcon,
      thin: CactusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
