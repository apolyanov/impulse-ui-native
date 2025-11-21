import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TipiBoldIcon } from "../bold";
import { TipiDuotoneIcon } from "../duotone";
import { TipiFillIcon } from "../fill";
import { TipiLightIcon } from "../light";
import { TipiRegularIcon } from "../regular";
import { TipiThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
