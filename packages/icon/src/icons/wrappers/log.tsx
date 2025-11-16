import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LogBold } from "../bold";
import { LogDuotone } from "../duotone";
import { LogFill } from "../fill";
import { LogLight } from "../light";
import { LogRegular } from "../regular";
import { LogThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Log = memo(function Log(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LogBold,
      duotone: LogDuotone,
      fill: LogFill,
      light: LogLight,
      regular: LogRegular,
      thin: LogThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
