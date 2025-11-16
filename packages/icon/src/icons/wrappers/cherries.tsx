import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CherriesBold } from "../bold";
import { CherriesDuotone } from "../duotone";
import { CherriesFill } from "../fill";
import { CherriesLight } from "../light";
import { CherriesRegular } from "../regular";
import { CherriesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Cherries = memo(function Cherries(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CherriesBold,
      duotone: CherriesDuotone,
      fill: CherriesFill,
      light: CherriesLight,
      regular: CherriesRegular,
      thin: CherriesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
