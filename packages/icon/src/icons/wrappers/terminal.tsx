import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TerminalBold } from "../bold";
import { TerminalDuotone } from "../duotone";
import { TerminalFill } from "../fill";
import { TerminalLight } from "../light";
import { TerminalRegular } from "../regular";
import { TerminalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Terminal = memo(function Terminal(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TerminalBold,
      duotone: TerminalDuotone,
      fill: TerminalFill,
      light: TerminalLight,
      regular: TerminalRegular,
      thin: TerminalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
