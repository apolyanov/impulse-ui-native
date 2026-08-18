import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { LightbulbBoldIcon } from "../bold/lightbulb-bold.icon";
import { LightbulbDuotoneIcon } from "../duotone/lightbulb-duotone.icon";
import { LightbulbFillIcon } from "../fill/lightbulb-fill.icon";
import { LightbulbLightIcon } from "../light/lightbulb-light.icon";
import { LightbulbRegularIcon } from "../regular/lightbulb-regular.icon";
import { LightbulbThinIcon } from "../thin/lightbulb-thin.icon";

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
