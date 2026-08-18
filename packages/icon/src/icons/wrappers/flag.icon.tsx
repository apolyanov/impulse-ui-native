import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FlagBoldIcon } from "../bold/flag-bold.icon";
import { FlagDuotoneIcon } from "../duotone/flag-duotone.icon";
import { FlagFillIcon } from "../fill/flag-fill.icon";
import { FlagLightIcon } from "../light/flag-light.icon";
import { FlagRegularIcon } from "../regular/flag-regular.icon";
import { FlagThinIcon } from "../thin/flag-thin.icon";

export const FlagIcon = memo(function Flag(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FlagBoldIcon,
      duotone: FlagDuotoneIcon,
      fill: FlagFillIcon,
      light: FlagLightIcon,
      regular: FlagRegularIcon,
      thin: FlagThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
