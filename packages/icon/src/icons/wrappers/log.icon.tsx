import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LogBoldIcon } from "../bold/log-bold.icon";
import { LogDuotoneIcon } from "../duotone/log-duotone.icon";
import { LogFillIcon } from "../fill/log-fill.icon";
import { LogLightIcon } from "../light/log-light.icon";
import { LogRegularIcon } from "../regular/log-regular.icon";
import { LogThinIcon } from "../thin/log-thin.icon";

export const LogIcon = memo(function Log(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LogBoldIcon,
      duotone: LogDuotoneIcon,
      fill: LogFillIcon,
      light: LogLightIcon,
      regular: LogRegularIcon,
      thin: LogThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
