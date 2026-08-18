import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { AvocadoBoldIcon } from "../bold/avocado-bold.icon";
import { AvocadoDuotoneIcon } from "../duotone/avocado-duotone.icon";
import { AvocadoFillIcon } from "../fill/avocado-fill.icon";
import { AvocadoLightIcon } from "../light/avocado-light.icon";
import { AvocadoRegularIcon } from "../regular/avocado-regular.icon";
import { AvocadoThinIcon } from "../thin/avocado-thin.icon";

export const AvocadoIcon = memo(function Avocado(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AvocadoBoldIcon,
      duotone: AvocadoDuotoneIcon,
      fill: AvocadoFillIcon,
      light: AvocadoLightIcon,
      regular: AvocadoRegularIcon,
      thin: AvocadoThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
