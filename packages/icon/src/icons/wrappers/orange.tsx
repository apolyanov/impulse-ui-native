import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { OrangeBold } from "../bold";
import { OrangeDuotone } from "../duotone";
import { OrangeFill } from "../fill";
import { OrangeLight } from "../light";
import { OrangeRegular } from "../regular";
import { OrangeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Orange = memo(function Orange(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: OrangeBold,
      duotone: OrangeDuotone,
      fill: OrangeFill,
      light: OrangeLight,
      regular: OrangeRegular,
      thin: OrangeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
