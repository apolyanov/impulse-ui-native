import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TipiBoldIcon } from "../bold/tipi-bold.icon";
import { TipiDuotoneIcon } from "../duotone/tipi-duotone.icon";
import { TipiFillIcon } from "../fill/tipi-fill.icon";
import { TipiLightIcon } from "../light/tipi-light.icon";
import { TipiRegularIcon } from "../regular/tipi-regular.icon";
import { TipiThinIcon } from "../thin/tipi-thin.icon";

export const TipiIcon = memo(function Tipi(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TipiBoldIcon,
      duotone: TipiDuotoneIcon,
      fill: TipiFillIcon,
      light: TipiLightIcon,
      regular: TipiRegularIcon,
      thin: TipiThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
