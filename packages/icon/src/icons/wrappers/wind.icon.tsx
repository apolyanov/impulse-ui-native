import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WindBoldIcon } from "../bold";
import { WindDuotoneIcon } from "../duotone";
import { WindFillIcon } from "../fill";
import { WindLightIcon } from "../light";
import { WindRegularIcon } from "../regular";
import { WindThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const WindIcon = memo(function Wind(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WindBoldIcon,
      duotone: WindDuotoneIcon,
      fill: WindFillIcon,
      light: WindLightIcon,
      regular: WindRegularIcon,
      thin: WindThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
