import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ToolboxBoldIcon } from "../bold";
import { ToolboxDuotoneIcon } from "../duotone";
import { ToolboxFillIcon } from "../fill";
import { ToolboxLightIcon } from "../light";
import { ToolboxRegularIcon } from "../regular";
import { ToolboxThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ToolboxIcon = memo(function Toolbox(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ToolboxBoldIcon,
      duotone: ToolboxDuotoneIcon,
      fill: ToolboxFillIcon,
      light: ToolboxLightIcon,
      regular: ToolboxRegularIcon,
      thin: ToolboxThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
