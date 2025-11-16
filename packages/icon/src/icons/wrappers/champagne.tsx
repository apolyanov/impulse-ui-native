import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChampagneBold } from "../bold";
import { ChampagneDuotone } from "../duotone";
import { ChampagneFill } from "../fill";
import { ChampagneLight } from "../light";
import { ChampagneRegular } from "../regular";
import { ChampagneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Champagne = memo(function Champagne(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChampagneBold,
      duotone: ChampagneDuotone,
      fill: ChampagneFill,
      light: ChampagneLight,
      regular: ChampagneRegular,
      thin: ChampagneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
