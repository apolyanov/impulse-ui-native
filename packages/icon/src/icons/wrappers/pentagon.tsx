import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PentagonBold } from "../bold";
import { PentagonDuotone } from "../duotone";
import { PentagonFill } from "../fill";
import { PentagonLight } from "../light";
import { PentagonRegular } from "../regular";
import { PentagonThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Pentagon = memo(function Pentagon(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PentagonBold,
      duotone: PentagonDuotone,
      fill: PentagonFill,
      light: PentagonLight,
      regular: PentagonRegular,
      thin: PentagonThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
