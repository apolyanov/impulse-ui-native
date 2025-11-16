import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VectorThreeBold } from "../bold";
import { VectorThreeDuotone } from "../duotone";
import { VectorThreeFill } from "../fill";
import { VectorThreeLight } from "../light";
import { VectorThreeRegular } from "../regular";
import { VectorThreeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const VectorThree = memo(function VectorThree(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VectorThreeBold,
      duotone: VectorThreeDuotone,
      fill: VectorThreeFill,
      light: VectorThreeLight,
      regular: VectorThreeRegular,
      thin: VectorThreeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
