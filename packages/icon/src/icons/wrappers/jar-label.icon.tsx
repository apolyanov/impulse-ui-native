import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { JarLabelBoldIcon } from "../bold";
import { JarLabelDuotoneIcon } from "../duotone";
import { JarLabelFillIcon } from "../fill";
import { JarLabelLightIcon } from "../light";
import { JarLabelRegularIcon } from "../regular";
import { JarLabelThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
