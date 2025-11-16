import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CirclesFourBold } from "../bold";
import { CirclesFourDuotone } from "../duotone";
import { CirclesFourFill } from "../fill";
import { CirclesFourLight } from "../light";
import { CirclesFourRegular } from "../regular";
import { CirclesFourThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CirclesFour = memo(function CirclesFour(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CirclesFourBold,
      duotone: CirclesFourDuotone,
      fill: CirclesFourFill,
      light: CirclesFourLight,
      regular: CirclesFourRegular,
      thin: CirclesFourThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
