import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CommandBoldIcon } from "../bold";
import { CommandDuotoneIcon } from "../duotone";
import { CommandFillIcon } from "../fill";
import { CommandLightIcon } from "../light";
import { CommandRegularIcon } from "../regular";
import { CommandThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CommandIcon = memo(function Command(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CommandBoldIcon,
      duotone: CommandDuotoneIcon,
      fill: CommandFillIcon,
      light: CommandLightIcon,
      regular: CommandRegularIcon,
      thin: CommandThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
