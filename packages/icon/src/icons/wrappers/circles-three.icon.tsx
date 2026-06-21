import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { CirclesThreeBoldIcon } from "../bold";
import { CirclesThreeDuotoneIcon } from "../duotone";
import { CirclesThreeFillIcon } from "../fill";
import { CirclesThreeLightIcon } from "../light";
import { CirclesThreeRegularIcon } from "../regular";
import { CirclesThreeThinIcon } from "../thin";

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
