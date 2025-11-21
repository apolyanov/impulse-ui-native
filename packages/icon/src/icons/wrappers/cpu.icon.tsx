import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CpuBoldIcon } from "../bold";
import { CpuDuotoneIcon } from "../duotone";
import { CpuFillIcon } from "../fill";
import { CpuLightIcon } from "../light";
import { CpuRegularIcon } from "../regular";
import { CpuThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CpuIcon = memo(function Cpu(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CpuBoldIcon,
      duotone: CpuDuotoneIcon,
      fill: CpuFillIcon,
      light: CpuLightIcon,
      regular: CpuRegularIcon,
      thin: CpuThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
