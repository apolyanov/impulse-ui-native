import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CirclesThreePlusBoldIcon } from "../bold/circles-three-plus-bold.icon";
import { CirclesThreePlusDuotoneIcon } from "../duotone/circles-three-plus-duotone.icon";
import { CirclesThreePlusFillIcon } from "../fill/circles-three-plus-fill.icon";
import { CirclesThreePlusLightIcon } from "../light/circles-three-plus-light.icon";
import { CirclesThreePlusRegularIcon } from "../regular/circles-three-plus-regular.icon";
import { CirclesThreePlusThinIcon } from "../thin/circles-three-plus-thin.icon";

export const CirclesThreePlusIcon = memo(function CirclesThreePlus(
  props: IconWrapperProps,
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
