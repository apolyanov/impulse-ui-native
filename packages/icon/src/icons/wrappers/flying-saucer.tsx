import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlyingSaucerBold } from "../bold";
import { FlyingSaucerDuotone } from "../duotone";
import { FlyingSaucerFill } from "../fill";
import { FlyingSaucerLight } from "../light";
import { FlyingSaucerRegular } from "../regular";
import { FlyingSaucerThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FlyingSaucer = memo(function FlyingSaucer(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlyingSaucerBold,
      duotone: FlyingSaucerDuotone,
      fill: FlyingSaucerFill,
      light: FlyingSaucerLight,
      regular: FlyingSaucerRegular,
      thin: FlyingSaucerThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
