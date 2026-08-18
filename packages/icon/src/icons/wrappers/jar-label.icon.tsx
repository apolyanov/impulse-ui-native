import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { JarLabelBoldIcon } from "../bold/jar-label-bold.icon";
import { JarLabelDuotoneIcon } from "../duotone/jar-label-duotone.icon";
import { JarLabelFillIcon } from "../fill/jar-label-fill.icon";
import { JarLabelLightIcon } from "../light/jar-label-light.icon";
import { JarLabelRegularIcon } from "../regular/jar-label-regular.icon";
import { JarLabelThinIcon } from "../thin/jar-label-thin.icon";

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
