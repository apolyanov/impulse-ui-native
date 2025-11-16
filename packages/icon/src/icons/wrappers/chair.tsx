import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChairBold } from "../bold";
import { ChairDuotone } from "../duotone";
import { ChairFill } from "../fill";
import { ChairLight } from "../light";
import { ChairRegular } from "../regular";
import { ChairThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Chair = memo(function Chair(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChairBold,
      duotone: ChairDuotone,
      fill: ChairFill,
      light: ChairLight,
      regular: ChairRegular,
      thin: ChairThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
