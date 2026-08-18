import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CirclesFourBoldIcon } from "../bold/circles-four-bold.icon";
import { CirclesFourDuotoneIcon } from "../duotone/circles-four-duotone.icon";
import { CirclesFourFillIcon } from "../fill/circles-four-fill.icon";
import { CirclesFourLightIcon } from "../light/circles-four-light.icon";
import { CirclesFourRegularIcon } from "../regular/circles-four-regular.icon";
import { CirclesFourThinIcon } from "../thin/circles-four-thin.icon";

export const CirclesFourIcon = memo(function CirclesFour(
  props: IconWrapperProps,
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
