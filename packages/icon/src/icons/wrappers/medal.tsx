import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MedalBold } from "../bold";
import { MedalDuotone } from "../duotone";
import { MedalFill } from "../fill";
import { MedalLight } from "../light";
import { MedalRegular } from "../regular";
import { MedalThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Medal = memo(function Medal(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MedalBold,
      duotone: MedalDuotone,
      fill: MedalFill,
      light: MedalLight,
      regular: MedalRegular,
      thin: MedalThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
