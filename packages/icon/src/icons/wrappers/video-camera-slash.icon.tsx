import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VideoCameraSlashBoldIcon } from "../bold";
import { VideoCameraSlashDuotoneIcon } from "../duotone";
import { VideoCameraSlashFillIcon } from "../fill";
import { VideoCameraSlashLightIcon } from "../light";
import { VideoCameraSlashRegularIcon } from "../regular";
import { VideoCameraSlashThinIcon } from "../thin";

export const VideoCameraSlashIcon = memo(function VideoCameraSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VideoCameraSlashBoldIcon,
      duotone: VideoCameraSlashDuotoneIcon,
      fill: VideoCameraSlashFillIcon,
      light: VideoCameraSlashLightIcon,
      regular: VideoCameraSlashRegularIcon,
      thin: VideoCameraSlashThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
