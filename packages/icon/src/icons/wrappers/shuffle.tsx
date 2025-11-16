import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShuffleBold } from "../bold";
import { ShuffleDuotone } from "../duotone";
import { ShuffleFill } from "../fill";
import { ShuffleLight } from "../light";
import { ShuffleRegular } from "../regular";
import { ShuffleThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Shuffle = memo(function Shuffle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShuffleBold,
      duotone: ShuffleDuotone,
      fill: ShuffleFill,
      light: ShuffleLight,
      regular: ShuffleRegular,
      thin: ShuffleThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
