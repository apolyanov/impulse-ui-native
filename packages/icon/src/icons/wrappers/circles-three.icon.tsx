import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CirclesThreeBoldIcon } from "../bold/circles-three-bold.icon";
import { CirclesThreeDuotoneIcon } from "../duotone/circles-three-duotone.icon";
import { CirclesThreeFillIcon } from "../fill/circles-three-fill.icon";
import { CirclesThreeLightIcon } from "../light/circles-three-light.icon";
import { CirclesThreeRegularIcon } from "../regular/circles-three-regular.icon";
import { CirclesThreeThinIcon } from "../thin/circles-three-thin.icon";

export const CirclesThreeIcon = memo(function CirclesThree(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CirclesThreeBoldIcon,
      duotone: CirclesThreeDuotoneIcon,
      fill: CirclesThreeFillIcon,
      light: CirclesThreeLightIcon,
      regular: CirclesThreeRegularIcon,
      thin: CirclesThreeThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
