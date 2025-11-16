import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NotificationBold } from "../bold";
import { NotificationDuotone } from "../duotone";
import { NotificationFill } from "../fill";
import { NotificationLight } from "../light";
import { NotificationRegular } from "../regular";
import { NotificationThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Notification = memo(function Notification(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NotificationBold,
      duotone: NotificationDuotone,
      fill: NotificationFill,
      light: NotificationLight,
      regular: NotificationRegular,
      thin: NotificationThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
