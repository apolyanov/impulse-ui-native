import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ChalkboardBold } from "../bold";
import { ChalkboardDuotone } from "../duotone";
import { ChalkboardFill } from "../fill";
import { ChalkboardLight } from "../light";
import { ChalkboardRegular } from "../regular";
import { ChalkboardThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Chalkboard = memo(function Chalkboard(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ChalkboardBold,
      duotone: ChalkboardDuotone,
      fill: ChalkboardFill,
      light: ChalkboardLight,
      regular: ChalkboardRegular,
      thin: ChalkboardThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
