import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { JarLabelBold } from "../bold";
import { JarLabelDuotone } from "../duotone";
import { JarLabelFill } from "../fill";
import { JarLabelLight } from "../light";
import { JarLabelRegular } from "../regular";
import { JarLabelThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const JarLabel = memo(function JarLabel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: JarLabelBold,
      duotone: JarLabelDuotone,
      fill: JarLabelFill,
      light: JarLabelLight,
      regular: JarLabelRegular,
      thin: JarLabelThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
