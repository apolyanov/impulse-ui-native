import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BeltBold } from "../bold";
import { BeltDuotone } from "../duotone";
import { BeltFill } from "../fill";
import { BeltLight } from "../light";
import { BeltRegular } from "../regular";
import { BeltThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Belt = memo(function Belt(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BeltBold,
      duotone: BeltDuotone,
      fill: BeltFill,
      light: BeltLight,
      regular: BeltRegular,
      thin: BeltThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
