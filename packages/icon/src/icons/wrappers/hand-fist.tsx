import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandFistBold } from "../bold";
import { HandFistDuotone } from "../duotone";
import { HandFistFill } from "../fill";
import { HandFistLight } from "../light";
import { HandFistRegular } from "../regular";
import { HandFistThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const HandFist = memo(function HandFist(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandFistBold,
      duotone: HandFistDuotone,
      fill: HandFistFill,
      light: HandFistLight,
      regular: HandFistRegular,
      thin: HandFistThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
