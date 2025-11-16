import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { CraneBold } from "../bold";
import { CraneDuotone } from "../duotone";
import { CraneFill } from "../fill";
import { CraneLight } from "../light";
import { CraneRegular } from "../regular";
import { CraneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Crane = memo(function Crane(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: CraneBold,
      duotone: CraneDuotone,
      fill: CraneFill,
      light: CraneLight,
      regular: CraneRegular,
      thin: CraneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
