import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { SockBoldIcon } from "../bold/sock-bold.icon";
import { SockDuotoneIcon } from "../duotone/sock-duotone.icon";
import { SockFillIcon } from "../fill/sock-fill.icon";
import { SockLightIcon } from "../light/sock-light.icon";
import { SockRegularIcon } from "../regular/sock-regular.icon";
import { SockThinIcon } from "../thin/sock-thin.icon";

export const SockIcon = memo(function Sock(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SockBoldIcon,
      duotone: SockDuotoneIcon,
      fill: SockFillIcon,
      light: SockLightIcon,
      regular: SockRegularIcon,
      thin: SockThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
