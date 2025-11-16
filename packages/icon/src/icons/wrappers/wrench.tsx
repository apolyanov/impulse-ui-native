import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { WrenchBold } from "../bold";
import { WrenchDuotone } from "../duotone";
import { WrenchFill } from "../fill";
import { WrenchLight } from "../light";
import { WrenchRegular } from "../regular";
import { WrenchThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Wrench = memo(function Wrench(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: WrenchBold,
      duotone: WrenchDuotone,
      fill: WrenchFill,
      light: WrenchLight,
      regular: WrenchRegular,
      thin: WrenchThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
