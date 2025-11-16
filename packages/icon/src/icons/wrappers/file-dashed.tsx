import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FileDashedBold } from "../bold";
import { FileDashedDuotone } from "../duotone";
import { FileDashedFill } from "../fill";
import { FileDashedLight } from "../light";
import { FileDashedRegular } from "../regular";
import { FileDashedThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FileDashed = memo(function FileDashed(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FileDashedBold,
      duotone: FileDashedDuotone,
      fill: FileDashedFill,
      light: FileDashedLight,
      regular: FileDashedRegular,
      thin: FileDashedThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
