import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CirclesThreePlusBold } from "../bold";
import { CirclesThreePlusDuotone } from "../duotone";
import { CirclesThreePlusFill } from "../fill";
import { CirclesThreePlusLight } from "../light";
import { CirclesThreePlusRegular } from "../regular";
import { CirclesThreePlusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CirclesThreePlus = memo(function CirclesThreePlus(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CirclesThreePlusBold,
      duotone: CirclesThreePlusDuotone,
      fill: CirclesThreePlusFill,
      light: CirclesThreePlusLight,
      regular: CirclesThreePlusRegular,
      thin: CirclesThreePlusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
