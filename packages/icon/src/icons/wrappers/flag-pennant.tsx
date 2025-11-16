import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlagPennantBold } from "../bold";
import { FlagPennantDuotone } from "../duotone";
import { FlagPennantFill } from "../fill";
import { FlagPennantLight } from "../light";
import { FlagPennantRegular } from "../regular";
import { FlagPennantThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FlagPennant = memo(function FlagPennant(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlagPennantBold,
      duotone: FlagPennantDuotone,
      fill: FlagPennantFill,
      light: FlagPennantLight,
      regular: FlagPennantRegular,
      thin: FlagPennantThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
