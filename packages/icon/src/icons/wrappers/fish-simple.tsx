import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FishSimpleBold } from "../bold";
import { FishSimpleDuotone } from "../duotone";
import { FishSimpleFill } from "../fill";
import { FishSimpleLight } from "../light";
import { FishSimpleRegular } from "../regular";
import { FishSimpleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FishSimple = memo(function FishSimple(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FishSimpleBold,
      duotone: FishSimpleDuotone,
      fill: FishSimpleFill,
      light: FishSimpleLight,
      regular: FishSimpleRegular,
      thin: FishSimpleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
