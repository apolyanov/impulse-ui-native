import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FarmBoldIcon } from "../bold";
import { FarmDuotoneIcon } from "../duotone";
import { FarmFillIcon } from "../fill";
import { FarmLightIcon } from "../light";
import { FarmRegularIcon } from "../regular";
import { FarmThinIcon } from "../thin";

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
