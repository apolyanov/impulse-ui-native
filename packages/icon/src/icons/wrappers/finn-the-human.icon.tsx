import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FinnTheHumanBoldIcon } from "../bold/finn-the-human-bold.icon";
import { FinnTheHumanDuotoneIcon } from "../duotone/finn-the-human-duotone.icon";
import { FinnTheHumanFillIcon } from "../fill/finn-the-human-fill.icon";
import { FinnTheHumanLightIcon } from "../light/finn-the-human-light.icon";
import { FinnTheHumanRegularIcon } from "../regular/finn-the-human-regular.icon";
import { FinnTheHumanThinIcon } from "../thin/finn-the-human-thin.icon";

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
