import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { QueueBold } from "../bold";
import { QueueDuotone } from "../duotone";
import { QueueFill } from "../fill";
import { QueueLight } from "../light";
import { QueueRegular } from "../regular";
import { QueueThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Queue = memo(function Queue(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: QueueBold,
      duotone: QueueDuotone,
      fill: QueueFill,
      light: QueueLight,
      regular: QueueRegular,
      thin: QueueThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
