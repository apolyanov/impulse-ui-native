import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { TeaBagBoldIcon } from "../bold";
import { TeaBagDuotoneIcon } from "../duotone";
import { TeaBagFillIcon } from "../fill";
import { TeaBagLightIcon } from "../light";
import { TeaBagRegularIcon } from "../regular";
import { TeaBagThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const TeaBagIcon = memo(function TeaBag(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: TeaBagBoldIcon,
      duotone: TeaBagDuotoneIcon,
      fill: TeaBagFillIcon,
      light: TeaBagLightIcon,
      regular: TeaBagRegularIcon,
      thin: TeaBagThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
