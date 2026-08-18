import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CommandBoldIcon } from "../bold/command-bold.icon";
import { CommandDuotoneIcon } from "../duotone/command-duotone.icon";
import { CommandFillIcon } from "../fill/command-fill.icon";
import { CommandLightIcon } from "../light/command-light.icon";
import { CommandRegularIcon } from "../regular/command-regular.icon";
import { CommandThinIcon } from "../thin/command-thin.icon";

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
