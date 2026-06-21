import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { MopedBoldIcon } from "../bold";
import { MopedDuotoneIcon } from "../duotone";
import { MopedFillIcon } from "../fill";
import { MopedLightIcon } from "../light";
import { MopedRegularIcon } from "../regular";
import { MopedThinIcon } from "../thin";

export const MopedIcon = memo(function Moped(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MopedBoldIcon,
      duotone: MopedDuotoneIcon,
      fill: MopedFillIcon,
      light: MopedLightIcon,
      regular: MopedRegularIcon,
      thin: MopedThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
