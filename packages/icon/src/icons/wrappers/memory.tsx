import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MemoryBold } from "../bold";
import { MemoryDuotone } from "../duotone";
import { MemoryFill } from "../fill";
import { MemoryLight } from "../light";
import { MemoryRegular } from "../regular";
import { MemoryThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Memory = memo(function Memory(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MemoryBold,
      duotone: MemoryDuotone,
      fill: MemoryFill,
      light: MemoryLight,
      regular: MemoryRegular,
      thin: MemoryThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
