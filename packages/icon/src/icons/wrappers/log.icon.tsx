import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LogBoldIcon } from "../bold";
import { LogDuotoneIcon } from "../duotone";
import { LogFillIcon } from "../fill";
import { LogLightIcon } from "../light";
import { LogRegularIcon } from "../regular";
import { LogThinIcon } from "../thin";

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
