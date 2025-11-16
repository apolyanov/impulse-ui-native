import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { StarFourBold } from "../bold";
import { StarFourDuotone } from "../duotone";
import { StarFourFill } from "../fill";
import { StarFourLight } from "../light";
import { StarFourRegular } from "../regular";
import { StarFourThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const StarFour = memo(function StarFour(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: StarFourBold,
      duotone: StarFourDuotone,
      fill: StarFourFill,
      light: StarFourLight,
      regular: StarFourRegular,
      thin: StarFourThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
