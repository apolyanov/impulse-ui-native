import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CactusBold } from "../bold";
import { CactusDuotone } from "../duotone";
import { CactusFill } from "../fill";
import { CactusLight } from "../light";
import { CactusRegular } from "../regular";
import { CactusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cactus = memo(function Cactus(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CactusBold,
      duotone: CactusDuotone,
      fill: CactusFill,
      light: CactusLight,
      regular: CactusRegular,
      thin: CactusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
