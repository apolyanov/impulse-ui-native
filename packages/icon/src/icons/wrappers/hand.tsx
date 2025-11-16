import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HandBold } from "../bold";
import { HandDuotone } from "../duotone";
import { HandFill } from "../fill";
import { HandLight } from "../light";
import { HandRegular } from "../regular";
import { HandThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Hand = memo(function Hand(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HandBold,
      duotone: HandDuotone,
      fill: HandFill,
      light: HandLight,
      regular: HandRegular,
      thin: HandThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
