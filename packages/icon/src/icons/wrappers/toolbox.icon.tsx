import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ToolboxBoldIcon } from "../bold/toolbox-bold.icon";
import { ToolboxDuotoneIcon } from "../duotone/toolbox-duotone.icon";
import { ToolboxFillIcon } from "../fill/toolbox-fill.icon";
import { ToolboxLightIcon } from "../light/toolbox-light.icon";
import { ToolboxRegularIcon } from "../regular/toolbox-regular.icon";
import { ToolboxThinIcon } from "../thin/toolbox-thin.icon";

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
