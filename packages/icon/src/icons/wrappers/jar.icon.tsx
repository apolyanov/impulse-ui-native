import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { JarBoldIcon } from "../bold/jar-bold.icon";
import { JarDuotoneIcon } from "../duotone/jar-duotone.icon";
import { JarFillIcon } from "../fill/jar-fill.icon";
import { JarLightIcon } from "../light/jar-light.icon";
import { JarRegularIcon } from "../regular/jar-regular.icon";
import { JarThinIcon } from "../thin/jar-thin.icon";

export const JarIcon = memo(function Jar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: JarBoldIcon,
      duotone: JarDuotoneIcon,
      fill: JarFillIcon,
      light: JarLightIcon,
      regular: JarRegularIcon,
      thin: JarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
