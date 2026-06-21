import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { JarLabelBoldIcon } from "../bold";
import { JarLabelDuotoneIcon } from "../duotone";
import { JarLabelFillIcon } from "../fill";
import { JarLabelLightIcon } from "../light";
import { JarLabelRegularIcon } from "../regular";
import { JarLabelThinIcon } from "../thin";

export const JarLabelIcon = memo(function JarLabel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: JarLabelBoldIcon,
      duotone: JarLabelDuotoneIcon,
      fill: JarLabelFillIcon,
      light: JarLabelLightIcon,
      regular: JarLabelRegularIcon,
      thin: JarLabelThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
