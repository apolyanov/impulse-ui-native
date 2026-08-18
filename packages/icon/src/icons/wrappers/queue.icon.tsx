import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { QueueBoldIcon } from "../bold/queue-bold.icon";
import { QueueDuotoneIcon } from "../duotone/queue-duotone.icon";
import { QueueFillIcon } from "../fill/queue-fill.icon";
import { QueueLightIcon } from "../light/queue-light.icon";
import { QueueRegularIcon } from "../regular/queue-regular.icon";
import { QueueThinIcon } from "../thin/queue-thin.icon";

export const QueueIcon = memo(function Queue(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: QueueBoldIcon,
      duotone: QueueDuotoneIcon,
      fill: QueueFillIcon,
      light: QueueLightIcon,
      regular: QueueRegularIcon,
      thin: QueueThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
