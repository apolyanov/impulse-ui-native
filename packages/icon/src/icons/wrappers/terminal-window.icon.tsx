import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TerminalWindowBoldIcon } from "../bold";
import { TerminalWindowDuotoneIcon } from "../duotone";
import { TerminalWindowFillIcon } from "../fill";
import { TerminalWindowLightIcon } from "../light";
import { TerminalWindowRegularIcon } from "../regular";
import { TerminalWindowThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TerminalWindowIcon = memo(function TerminalWindow(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TerminalWindowBoldIcon,
      duotone: TerminalWindowDuotoneIcon,
      fill: TerminalWindowFillIcon,
      light: TerminalWindowLightIcon,
      regular: TerminalWindowRegularIcon,
      thin: TerminalWindowThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
