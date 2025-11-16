import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TextHThreeBold } from "../bold";
import { TextHThreeDuotone } from "../duotone";
import { TextHThreeFill } from "../fill";
import { TextHThreeLight } from "../light";
import { TextHThreeRegular } from "../regular";
import { TextHThreeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TextHThree = memo(function TextHThree(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TextHThreeBold,
      duotone: TextHThreeDuotone,
      fill: TextHThreeFill,
      light: TextHThreeLight,
      regular: TextHThreeRegular,
      thin: TextHThreeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
