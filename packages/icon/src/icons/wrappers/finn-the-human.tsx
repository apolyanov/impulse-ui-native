import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { FinnTheHumanBold } from "../bold";
import { FinnTheHumanDuotone } from "../duotone";
import { FinnTheHumanFill } from "../fill";
import { FinnTheHumanLight } from "../light";
import { FinnTheHumanRegular } from "../regular";
import { FinnTheHumanThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const FinnTheHuman = memo(function FinnTheHuman(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FinnTheHumanBold,
      duotone: FinnTheHumanDuotone,
      fill: FinnTheHumanFill,
      light: FinnTheHumanLight,
      regular: FinnTheHumanRegular,
      thin: FinnTheHumanThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
