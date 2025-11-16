import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { LightbulbBold } from "../bold";
import { LightbulbDuotone } from "../duotone";
import { LightbulbFill } from "../fill";
import { LightbulbLight } from "../light";
import { LightbulbRegular } from "../regular";
import { LightbulbThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Lightbulb = memo(function Lightbulb(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: LightbulbBold,
      duotone: LightbulbDuotone,
      fill: LightbulbFill,
      light: LightbulbLight,
      regular: LightbulbRegular,
      thin: LightbulbThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
