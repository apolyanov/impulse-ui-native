import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { MartiniBold } from "../bold";
import { MartiniDuotone } from "../duotone";
import { MartiniFill } from "../fill";
import { MartiniLight } from "../light";
import { MartiniRegular } from "../regular";
import { MartiniThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Martini = memo(function Martini(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: MartiniBold,
      duotone: MartiniDuotone,
      fill: MartiniFill,
      light: MartiniLight,
      regular: MartiniRegular,
      thin: MartiniThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
