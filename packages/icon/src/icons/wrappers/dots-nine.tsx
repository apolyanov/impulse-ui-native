import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { DotsNineBold } from "../bold";
import { DotsNineDuotone } from "../duotone";
import { DotsNineFill } from "../fill";
import { DotsNineLight } from "../light";
import { DotsNineRegular } from "../regular";
import { DotsNineThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const DotsNine = memo(function DotsNine(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DotsNineBold,
      duotone: DotsNineDuotone,
      fill: DotsNineFill,
      light: DotsNineLight,
      regular: DotsNineRegular,
      thin: DotsNineThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
