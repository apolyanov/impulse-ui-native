import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MemoryBoldIcon } from "../bold/memory-bold.icon";
import { MemoryDuotoneIcon } from "../duotone/memory-duotone.icon";
import { MemoryFillIcon } from "../fill/memory-fill.icon";
import { MemoryLightIcon } from "../light/memory-light.icon";
import { MemoryRegularIcon } from "../regular/memory-regular.icon";
import { MemoryThinIcon } from "../thin/memory-thin.icon";

export const MemoryIcon = memo(function Memory(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MemoryBoldIcon,
      duotone: MemoryDuotoneIcon,
      fill: MemoryFillIcon,
      light: MemoryLightIcon,
      regular: MemoryRegularIcon,
      thin: MemoryThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
