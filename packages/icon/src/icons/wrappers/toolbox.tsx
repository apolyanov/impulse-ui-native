import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ToolboxBold } from "../bold";
import { ToolboxDuotone } from "../duotone";
import { ToolboxFill } from "../fill";
import { ToolboxLight } from "../light";
import { ToolboxRegular } from "../regular";
import { ToolboxThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Toolbox = memo(function Toolbox(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToolboxBold,
      duotone: ToolboxDuotone,
      fill: ToolboxFill,
      light: ToolboxLight,
      regular: ToolboxRegular,
      thin: ToolboxThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
