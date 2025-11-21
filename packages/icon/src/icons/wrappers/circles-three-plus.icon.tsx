import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CirclesThreePlusBoldIcon } from "../bold";
import { CirclesThreePlusDuotoneIcon } from "../duotone";
import { CirclesThreePlusFillIcon } from "../fill";
import { CirclesThreePlusLightIcon } from "../light";
import { CirclesThreePlusRegularIcon } from "../regular";
import { CirclesThreePlusThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CirclesThreePlusIcon = memo(function CirclesThreePlus(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CirclesThreePlusBoldIcon,
      duotone: CirclesThreePlusDuotoneIcon,
      fill: CirclesThreePlusFillIcon,
      light: CirclesThreePlusLightIcon,
      regular: CirclesThreePlusRegularIcon,
      thin: CirclesThreePlusThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
