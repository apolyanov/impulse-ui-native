import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileMdBold } from "../bold";
import { FileMdDuotone } from "../duotone";
import { FileMdFill } from "../fill";
import { FileMdLight } from "../light";
import { FileMdRegular } from "../regular";
import { FileMdThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileMd = memo(function FileMd(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileMdBold,
      duotone: FileMdDuotone,
      fill: FileMdFill,
      light: FileMdLight,
      regular: FileMdRegular,
      thin: FileMdThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
