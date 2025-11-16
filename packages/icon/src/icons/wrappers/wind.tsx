import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WindBold } from "../bold";
import { WindDuotone } from "../duotone";
import { WindFill } from "../fill";
import { WindLight } from "../light";
import { WindRegular } from "../regular";
import { WindThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Wind = memo(function Wind(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WindBold,
      duotone: WindDuotone,
      fill: WindFill,
      light: WindLight,
      regular: WindRegular,
      thin: WindThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
