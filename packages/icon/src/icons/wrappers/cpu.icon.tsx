import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CpuBoldIcon } from "../bold/cpu-bold.icon";
import { CpuDuotoneIcon } from "../duotone/cpu-duotone.icon";
import { CpuFillIcon } from "../fill/cpu-fill.icon";
import { CpuLightIcon } from "../light/cpu-light.icon";
import { CpuRegularIcon } from "../regular/cpu-regular.icon";
import { CpuThinIcon } from "../thin/cpu-thin.icon";

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
