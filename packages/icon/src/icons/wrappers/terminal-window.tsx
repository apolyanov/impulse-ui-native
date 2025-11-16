import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TerminalWindowBold } from "../bold";
import { TerminalWindowDuotone } from "../duotone";
import { TerminalWindowFill } from "../fill";
import { TerminalWindowLight } from "../light";
import { TerminalWindowRegular } from "../regular";
import { TerminalWindowThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TerminalWindow = memo(function TerminalWindow(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TerminalWindowBold,
      duotone: TerminalWindowDuotone,
      fill: TerminalWindowFill,
      light: TerminalWindowLight,
      regular: TerminalWindowRegular,
      thin: TerminalWindowThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
