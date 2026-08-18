import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FarmBoldIcon } from "../bold/farm-bold.icon";
import { FarmDuotoneIcon } from "../duotone/farm-duotone.icon";
import { FarmFillIcon } from "../fill/farm-fill.icon";
import { FarmLightIcon } from "../light/farm-light.icon";
import { FarmRegularIcon } from "../regular/farm-regular.icon";
import { FarmThinIcon } from "../thin/farm-thin.icon";

export const FarmIcon = memo(function Farm(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FarmBoldIcon,
      duotone: FarmDuotoneIcon,
      fill: FarmFillIcon,
      light: FarmLightIcon,
      regular: FarmRegularIcon,
      thin: FarmThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
