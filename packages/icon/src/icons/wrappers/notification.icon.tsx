import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { NotificationBoldIcon } from "../bold/notification-bold.icon";
import { NotificationDuotoneIcon } from "../duotone/notification-duotone.icon";
import { NotificationFillIcon } from "../fill/notification-fill.icon";
import { NotificationLightIcon } from "../light/notification-light.icon";
import { NotificationRegularIcon } from "../regular/notification-regular.icon";
import { NotificationThinIcon } from "../thin/notification-thin.icon";

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
