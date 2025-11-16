import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BasketballBold } from "../bold";
import { BasketballDuotone } from "../duotone";
import { BasketballFill } from "../fill";
import { BasketballLight } from "../light";
import { BasketballRegular } from "../regular";
import { BasketballThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Basketball = memo(function Basketball(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BasketballBold,
      duotone: BasketballDuotone,
      fill: BasketballFill,
      light: BasketballLight,
      regular: BasketballRegular,
      thin: BasketballThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
