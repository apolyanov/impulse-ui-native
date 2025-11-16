import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CirclesThreeBold } from "../bold";
import { CirclesThreeDuotone } from "../duotone";
import { CirclesThreeFill } from "../fill";
import { CirclesThreeLight } from "../light";
import { CirclesThreeRegular } from "../regular";
import { CirclesThreeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const CirclesThree = memo(function CirclesThree(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CirclesThreeBold,
      duotone: CirclesThreeDuotone,
      fill: CirclesThreeFill,
      light: CirclesThreeLight,
      regular: CirclesThreeRegular,
      thin: CirclesThreeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
