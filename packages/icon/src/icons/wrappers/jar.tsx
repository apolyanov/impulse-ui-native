import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { JarBold } from "../bold";
import { JarDuotone } from "../duotone";
import { JarFill } from "../fill";
import { JarLight } from "../light";
import { JarRegular } from "../regular";
import { JarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Jar = memo(function Jar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: JarBold,
      duotone: JarDuotone,
      fill: JarFill,
      light: JarLight,
      regular: JarRegular,
      thin: JarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
