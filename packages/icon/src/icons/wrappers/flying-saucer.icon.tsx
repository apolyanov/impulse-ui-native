import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlyingSaucerBoldIcon } from "../bold/flying-saucer-bold.icon";
import { FlyingSaucerDuotoneIcon } from "../duotone/flying-saucer-duotone.icon";
import { FlyingSaucerFillIcon } from "../fill/flying-saucer-fill.icon";
import { FlyingSaucerLightIcon } from "../light/flying-saucer-light.icon";
import { FlyingSaucerRegularIcon } from "../regular/flying-saucer-regular.icon";
import { FlyingSaucerThinIcon } from "../thin/flying-saucer-thin.icon";

export const FlyingSaucerIcon = memo(function FlyingSaucer(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlyingSaucerBoldIcon,
      duotone: FlyingSaucerDuotoneIcon,
      fill: FlyingSaucerFillIcon,
      light: FlyingSaucerLightIcon,
      regular: FlyingSaucerRegularIcon,
      thin: FlyingSaucerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
