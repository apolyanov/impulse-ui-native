import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RabbitBoldIcon } from "../bold/rabbit-bold.icon";
import { RabbitDuotoneIcon } from "../duotone/rabbit-duotone.icon";
import { RabbitFillIcon } from "../fill/rabbit-fill.icon";
import { RabbitLightIcon } from "../light/rabbit-light.icon";
import { RabbitRegularIcon } from "../regular/rabbit-regular.icon";
import { RabbitThinIcon } from "../thin/rabbit-thin.icon";

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
