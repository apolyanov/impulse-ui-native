import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NotificationBoldIcon } from "../bold";
import { NotificationDuotoneIcon } from "../duotone";
import { NotificationFillIcon } from "../fill";
import { NotificationLightIcon } from "../light";
import { NotificationRegularIcon } from "../regular";
import { NotificationThinIcon } from "../thin";

export const NotificationIcon = memo(function Notification(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotificationBoldIcon,
      duotone: NotificationDuotoneIcon,
      fill: NotificationFillIcon,
      light: NotificationLightIcon,
      regular: NotificationRegularIcon,
      thin: NotificationThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
