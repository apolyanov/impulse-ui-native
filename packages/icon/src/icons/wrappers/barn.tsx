import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BarnBold } from "../bold";
import { BarnDuotone } from "../duotone";
import { BarnFill } from "../fill";
import { BarnLight } from "../light";
import { BarnRegular } from "../regular";
import { BarnThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Barn = memo(function Barn(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BarnBold,
      duotone: BarnDuotone,
      fill: BarnFill,
      light: BarnLight,
      regular: BarnRegular,
      thin: BarnThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
