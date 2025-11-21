import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandFistBoldIcon } from "../bold";
import { HandFistDuotoneIcon } from "../duotone";
import { HandFistFillIcon } from "../fill";
import { HandFistLightIcon } from "../light";
import { HandFistRegularIcon } from "../regular";
import { HandFistThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandFistIcon = memo(function HandFist(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandFistBoldIcon,
      duotone: HandFistDuotoneIcon,
      fill: HandFistFillIcon,
      light: HandFistLightIcon,
      regular: HandFistRegularIcon,
      thin: HandFistThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
