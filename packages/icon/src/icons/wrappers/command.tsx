import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CommandBold } from "../bold";
import { CommandDuotone } from "../duotone";
import { CommandFill } from "../fill";
import { CommandLight } from "../light";
import { CommandRegular } from "../regular";
import { CommandThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Command = memo(function Command(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CommandBold,
      duotone: CommandDuotone,
      fill: CommandFill,
      light: CommandLight,
      regular: CommandRegular,
      thin: CommandThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
