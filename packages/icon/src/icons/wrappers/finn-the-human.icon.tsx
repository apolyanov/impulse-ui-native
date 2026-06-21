import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FinnTheHumanBoldIcon } from "../bold";
import { FinnTheHumanDuotoneIcon } from "../duotone";
import { FinnTheHumanFillIcon } from "../fill";
import { FinnTheHumanLightIcon } from "../light";
import { FinnTheHumanRegularIcon } from "../regular";
import { FinnTheHumanThinIcon } from "../thin";

export const FinnTheHumanIcon = memo(function FinnTheHuman(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FinnTheHumanBoldIcon,
      duotone: FinnTheHumanDuotoneIcon,
      fill: FinnTheHumanFillIcon,
      light: FinnTheHumanLightIcon,
      regular: FinnTheHumanRegularIcon,
      thin: FinnTheHumanThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
