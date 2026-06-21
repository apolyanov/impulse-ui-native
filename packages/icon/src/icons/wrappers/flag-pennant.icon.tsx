import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlagPennantBoldIcon } from "../bold";
import { FlagPennantDuotoneIcon } from "../duotone";
import { FlagPennantFillIcon } from "../fill";
import { FlagPennantLightIcon } from "../light";
import { FlagPennantRegularIcon } from "../regular";
import { FlagPennantThinIcon } from "../thin";

export const FlagPennantIcon = memo(function FlagPennant(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlagPennantBoldIcon,
      duotone: FlagPennantDuotoneIcon,
      fill: FlagPennantFillIcon,
      light: FlagPennantLightIcon,
      regular: FlagPennantRegularIcon,
      thin: FlagPennantThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
