import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PowerBoldIcon } from "../bold/power-bold.icon";
import { PowerDuotoneIcon } from "../duotone/power-duotone.icon";
import { PowerFillIcon } from "../fill/power-fill.icon";
import { PowerLightIcon } from "../light/power-light.icon";
import { PowerRegularIcon } from "../regular/power-regular.icon";
import { PowerThinIcon } from "../thin/power-thin.icon";

export const PowerIcon = memo(function Power(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PowerBoldIcon,
      duotone: PowerDuotoneIcon,
      fill: PowerFillIcon,
      light: PowerLightIcon,
      regular: PowerRegularIcon,
      thin: PowerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
