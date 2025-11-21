import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShuffleBoldIcon } from "../bold";
import { ShuffleDuotoneIcon } from "../duotone";
import { ShuffleFillIcon } from "../fill";
import { ShuffleLightIcon } from "../light";
import { ShuffleRegularIcon } from "../regular";
import { ShuffleThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const ShuffleIcon = memo(function Shuffle(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShuffleBoldIcon,
      duotone: ShuffleDuotoneIcon,
      fill: ShuffleFillIcon,
      light: ShuffleLightIcon,
      regular: ShuffleRegularIcon,
      thin: ShuffleThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
