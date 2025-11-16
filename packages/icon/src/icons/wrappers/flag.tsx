import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlagBold } from "../bold";
import { FlagDuotone } from "../duotone";
import { FlagFill } from "../fill";
import { FlagLight } from "../light";
import { FlagRegular } from "../regular";
import { FlagThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Flag = memo(function Flag(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlagBold,
      duotone: FlagDuotone,
      fill: FlagFill,
      light: FlagLight,
      regular: FlagRegular,
      thin: FlagThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
