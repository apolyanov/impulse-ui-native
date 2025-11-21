import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { RabbitBoldIcon } from "../bold";
import { RabbitDuotoneIcon } from "../duotone";
import { RabbitFillIcon } from "../fill";
import { RabbitLightIcon } from "../light";
import { RabbitRegularIcon } from "../regular";
import { RabbitThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const RabbitIcon = memo(function Rabbit(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RabbitBoldIcon,
      duotone: RabbitDuotoneIcon,
      fill: RabbitFillIcon,
      light: RabbitLightIcon,
      regular: RabbitRegularIcon,
      thin: RabbitThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
