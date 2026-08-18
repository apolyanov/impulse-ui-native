import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { TerminalBoldIcon } from "../bold/terminal-bold.icon";
import { TerminalDuotoneIcon } from "../duotone/terminal-duotone.icon";
import { TerminalFillIcon } from "../fill/terminal-fill.icon";
import { TerminalLightIcon } from "../light/terminal-light.icon";
import { TerminalRegularIcon } from "../regular/terminal-regular.icon";
import { TerminalThinIcon } from "../thin/terminal-thin.icon";

export const TerminalIcon = memo(function Terminal(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TerminalBoldIcon,
      duotone: TerminalDuotoneIcon,
      fill: TerminalFillIcon,
      light: TerminalLightIcon,
      regular: TerminalRegularIcon,
      thin: TerminalThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
