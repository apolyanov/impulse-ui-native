import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { ShuffleBoldIcon } from "../bold/shuffle-bold.icon";
import { ShuffleDuotoneIcon } from "../duotone/shuffle-duotone.icon";
import { ShuffleFillIcon } from "../fill/shuffle-fill.icon";
import { ShuffleLightIcon } from "../light/shuffle-light.icon";
import { ShuffleRegularIcon } from "../regular/shuffle-regular.icon";
import { ShuffleThinIcon } from "../thin/shuffle-thin.icon";

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
