import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AsteriskBold } from "../bold";
import { AsteriskDuotone } from "../duotone";
import { AsteriskFill } from "../fill";
import { AsteriskLight } from "../light";
import { AsteriskRegular } from "../regular";
import { AsteriskThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Asterisk = memo(function Asterisk(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AsteriskBold,
      duotone: AsteriskDuotone,
      fill: AsteriskFill,
      light: AsteriskLight,
      regular: AsteriskRegular,
      thin: AsteriskThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
