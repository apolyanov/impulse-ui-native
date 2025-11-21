import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CirclesFourBoldIcon } from "../bold";
import { CirclesFourDuotoneIcon } from "../duotone";
import { CirclesFourFillIcon } from "../fill";
import { CirclesFourLightIcon } from "../light";
import { CirclesFourRegularIcon } from "../regular";
import { CirclesFourThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CirclesFourIcon = memo(function CirclesFour(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CirclesFourBoldIcon,
      duotone: CirclesFourDuotoneIcon,
      fill: CirclesFourFillIcon,
      light: CirclesFourLightIcon,
      regular: CirclesFourRegularIcon,
      thin: CirclesFourThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
