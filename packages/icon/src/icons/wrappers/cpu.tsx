import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CpuBold } from "../bold";
import { CpuDuotone } from "../duotone";
import { CpuFill } from "../fill";
import { CpuLight } from "../light";
import { CpuRegular } from "../regular";
import { CpuThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cpu = memo(function Cpu(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CpuBold,
      duotone: CpuDuotone,
      fill: CpuFill,
      light: CpuLight,
      regular: CpuRegular,
      thin: CpuThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
