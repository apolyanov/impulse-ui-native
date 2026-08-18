import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlagPennantBoldIcon } from "../bold/flag-pennant-bold.icon";
import { FlagPennantDuotoneIcon } from "../duotone/flag-pennant-duotone.icon";
import { FlagPennantFillIcon } from "../fill/flag-pennant-fill.icon";
import { FlagPennantLightIcon } from "../light/flag-pennant-light.icon";
import { FlagPennantRegularIcon } from "../regular/flag-pennant-regular.icon";
import { FlagPennantThinIcon } from "../thin/flag-pennant-thin.icon";

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
