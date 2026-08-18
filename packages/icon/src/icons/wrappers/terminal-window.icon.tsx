import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TerminalWindowBoldIcon } from "../bold/terminal-window-bold.icon";
import { TerminalWindowDuotoneIcon } from "../duotone/terminal-window-duotone.icon";
import { TerminalWindowFillIcon } from "../fill/terminal-window-fill.icon";
import { TerminalWindowLightIcon } from "../light/terminal-window-light.icon";
import { TerminalWindowRegularIcon } from "../regular/terminal-window-regular.icon";
import { TerminalWindowThinIcon } from "../thin/terminal-window-thin.icon";

export const TerminalWindowIcon = memo(function TerminalWindow(
  props: IconWrapperProps,
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
