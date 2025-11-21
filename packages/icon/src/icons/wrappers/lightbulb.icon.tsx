import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LightbulbBoldIcon } from "../bold";
import { LightbulbDuotoneIcon } from "../duotone";
import { LightbulbFillIcon } from "../fill";
import { LightbulbLightIcon } from "../light";
import { LightbulbRegularIcon } from "../regular";
import { LightbulbThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const LightbulbIcon = memo(function Lightbulb(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LightbulbBoldIcon,
      duotone: LightbulbDuotoneIcon,
      fill: LightbulbFillIcon,
      light: LightbulbLightIcon,
      regular: LightbulbRegularIcon,
      thin: LightbulbThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
