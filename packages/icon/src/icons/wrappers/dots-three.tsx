import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotsThreeBold } from "../bold";
import { DotsThreeDuotone } from "../duotone";
import { DotsThreeFill } from "../fill";
import { DotsThreeLight } from "../light";
import { DotsThreeRegular } from "../regular";
import { DotsThreeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DotsThree = memo(function DotsThree(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsThreeBold,
      duotone: DotsThreeDuotone,
      fill: DotsThreeFill,
      light: DotsThreeLight,
      regular: DotsThreeRegular,
      thin: DotsThreeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
