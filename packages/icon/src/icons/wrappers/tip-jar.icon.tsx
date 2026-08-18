import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TipJarBoldIcon } from "../bold/tip-jar-bold.icon";
import { TipJarDuotoneIcon } from "../duotone/tip-jar-duotone.icon";
import { TipJarFillIcon } from "../fill/tip-jar-fill.icon";
import { TipJarLightIcon } from "../light/tip-jar-light.icon";
import { TipJarRegularIcon } from "../regular/tip-jar-regular.icon";
import { TipJarThinIcon } from "../thin/tip-jar-thin.icon";

export const TipJarIcon = memo(function TipJar(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TipJarBoldIcon,
      duotone: TipJarDuotoneIcon,
      fill: TipJarFillIcon,
      light: TipJarLightIcon,
      regular: TipJarRegularIcon,
      thin: TipJarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
