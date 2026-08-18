import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ChampagneBoldIcon } from "../bold/champagne-bold.icon";
import { ChampagneDuotoneIcon } from "../duotone/champagne-duotone.icon";
import { ChampagneFillIcon } from "../fill/champagne-fill.icon";
import { ChampagneLightIcon } from "../light/champagne-light.icon";
import { ChampagneRegularIcon } from "../regular/champagne-regular.icon";
import { ChampagneThinIcon } from "../thin/champagne-thin.icon";

export const ChampagneIcon = memo(function Champagne(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChampagneBoldIcon,
      duotone: ChampagneDuotoneIcon,
      fill: ChampagneFillIcon,
      light: ChampagneLightIcon,
      regular: ChampagneRegularIcon,
      thin: ChampagneThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
