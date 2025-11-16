import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BoxingGloveBold } from "../bold";
import { BoxingGloveDuotone } from "../duotone";
import { BoxingGloveFill } from "../fill";
import { BoxingGloveLight } from "../light";
import { BoxingGloveRegular } from "../regular";
import { BoxingGloveThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const BoxingGlove = memo(function BoxingGlove(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BoxingGloveBold,
      duotone: BoxingGloveDuotone,
      fill: BoxingGloveFill,
      light: BoxingGloveLight,
      regular: BoxingGloveRegular,
      thin: BoxingGloveThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
