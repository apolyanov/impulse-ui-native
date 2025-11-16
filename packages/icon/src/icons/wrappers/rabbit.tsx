import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RabbitBold } from "../bold";
import { RabbitDuotone } from "../duotone";
import { RabbitFill } from "../fill";
import { RabbitLight } from "../light";
import { RabbitRegular } from "../regular";
import { RabbitThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Rabbit = memo(function Rabbit(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RabbitBold,
      duotone: RabbitDuotone,
      fill: RabbitFill,
      light: RabbitLight,
      regular: RabbitRegular,
      thin: RabbitThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
