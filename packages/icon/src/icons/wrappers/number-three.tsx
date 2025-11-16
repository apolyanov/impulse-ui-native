import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberThreeBold } from "../bold";
import { NumberThreeDuotone } from "../duotone";
import { NumberThreeFill } from "../fill";
import { NumberThreeLight } from "../light";
import { NumberThreeRegular } from "../regular";
import { NumberThreeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberThree = memo(function NumberThree(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberThreeBold,
      duotone: NumberThreeDuotone,
      fill: NumberThreeFill,
      light: NumberThreeLight,
      regular: NumberThreeRegular,
      thin: NumberThreeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
