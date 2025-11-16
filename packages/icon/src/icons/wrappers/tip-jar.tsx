import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TipJarBold } from "../bold";
import { TipJarDuotone } from "../duotone";
import { TipJarFill } from "../fill";
import { TipJarLight } from "../light";
import { TipJarRegular } from "../regular";
import { TipJarThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TipJar = memo(function TipJar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TipJarBold,
      duotone: TipJarDuotone,
      fill: TipJarFill,
      light: TipJarLight,
      regular: TipJarRegular,
      thin: TipJarThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
