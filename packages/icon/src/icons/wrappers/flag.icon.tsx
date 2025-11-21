import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FlagBoldIcon } from "../bold";
import { FlagDuotoneIcon } from "../duotone";
import { FlagFillIcon } from "../fill";
import { FlagLightIcon } from "../light";
import { FlagRegularIcon } from "../regular";
import { FlagThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

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
