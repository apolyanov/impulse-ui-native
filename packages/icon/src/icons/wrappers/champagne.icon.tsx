import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChampagneBoldIcon } from "../bold";
import { ChampagneDuotoneIcon } from "../duotone";
import { ChampagneFillIcon } from "../fill";
import { ChampagneLightIcon } from "../light";
import { ChampagneRegularIcon } from "../regular";
import { ChampagneThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
