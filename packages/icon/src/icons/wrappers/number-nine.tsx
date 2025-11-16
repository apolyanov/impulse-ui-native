import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { NumberNineBold } from "../bold";
import { NumberNineDuotone } from "../duotone";
import { NumberNineFill } from "../fill";
import { NumberNineLight } from "../light";
import { NumberNineRegular } from "../regular";
import { NumberNineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const NumberNine = memo(function NumberNine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: NumberNineBold,
      duotone: NumberNineDuotone,
      fill: NumberNineFill,
      light: NumberNineLight,
      regular: NumberNineRegular,
      thin: NumberNineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
