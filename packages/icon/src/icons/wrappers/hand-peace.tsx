import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandPeaceBold } from "../bold";
import { HandPeaceDuotone } from "../duotone";
import { HandPeaceFill } from "../fill";
import { HandPeaceLight } from "../light";
import { HandPeaceRegular } from "../regular";
import { HandPeaceThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandPeace = memo(function HandPeace(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandPeaceBold,
      duotone: HandPeaceDuotone,
      fill: HandPeaceFill,
      light: HandPeaceLight,
      regular: HandPeaceRegular,
      thin: HandPeaceThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
