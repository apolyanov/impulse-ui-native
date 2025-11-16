import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { PantsBold } from "../bold";
import { PantsDuotone } from "../duotone";
import { PantsFill } from "../fill";
import { PantsLight } from "../light";
import { PantsRegular } from "../regular";
import { PantsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Pants = memo(function Pants(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PantsBold,
      duotone: PantsDuotone,
      fill: PantsFill,
      light: PantsLight,
      regular: PantsRegular,
      thin: PantsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
