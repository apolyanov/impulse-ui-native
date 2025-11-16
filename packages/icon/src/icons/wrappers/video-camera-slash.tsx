import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VideoCameraSlashBold } from "../bold";
import { VideoCameraSlashDuotone } from "../duotone";
import { VideoCameraSlashFill } from "../fill";
import { VideoCameraSlashLight } from "../light";
import { VideoCameraSlashRegular } from "../regular";
import { VideoCameraSlashThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const VideoCameraSlash = memo(function VideoCameraSlash(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VideoCameraSlashBold,
      duotone: VideoCameraSlashDuotone,
      fill: VideoCameraSlashFill,
      light: VideoCameraSlashLight,
      regular: VideoCameraSlashRegular,
      thin: VideoCameraSlashThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
