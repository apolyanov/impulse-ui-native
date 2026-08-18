import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { EarBoldIcon } from "../bold/ear-bold.icon";
import { EarDuotoneIcon } from "../duotone/ear-duotone.icon";
import { EarFillIcon } from "../fill/ear-fill.icon";
import { EarLightIcon } from "../light/ear-light.icon";
import { EarRegularIcon } from "../regular/ear-regular.icon";
import { EarThinIcon } from "../thin/ear-thin.icon";

export const EarIcon = memo(function Ear(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: EarBoldIcon,
      duotone: EarDuotoneIcon,
      fill: EarFillIcon,
      light: EarLightIcon,
      regular: EarRegularIcon,
      thin: EarThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
