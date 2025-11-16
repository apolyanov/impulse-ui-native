import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SpadeBold } from "../bold";
import { SpadeDuotone } from "../duotone";
import { SpadeFill } from "../fill";
import { SpadeLight } from "../light";
import { SpadeRegular } from "../regular";
import { SpadeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Spade = memo(function Spade(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SpadeBold,
      duotone: SpadeDuotone,
      fill: SpadeFill,
      light: SpadeLight,
      regular: SpadeRegular,
      thin: SpadeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
