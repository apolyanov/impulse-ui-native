import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { DiscBoldIcon } from "../bold/disc-bold.icon";
import { DiscDuotoneIcon } from "../duotone/disc-duotone.icon";
import { DiscFillIcon } from "../fill/disc-fill.icon";
import { DiscLightIcon } from "../light/disc-light.icon";
import { DiscRegularIcon } from "../regular/disc-regular.icon";
import { DiscThinIcon } from "../thin/disc-thin.icon";

export const DiscIcon = memo(function Disc(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: DiscBoldIcon,
      duotone: DiscDuotoneIcon,
      fill: DiscFillIcon,
      light: DiscLightIcon,
      regular: DiscRegularIcon,
      thin: DiscThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
