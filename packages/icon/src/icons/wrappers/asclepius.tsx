import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AsclepiusBold } from "../bold";
import { AsclepiusDuotone } from "../duotone";
import { AsclepiusFill } from "../fill";
import { AsclepiusLight } from "../light";
import { AsclepiusRegular } from "../regular";
import { AsclepiusThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Asclepius = memo(function Asclepius(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AsclepiusBold,
      duotone: AsclepiusDuotone,
      fill: AsclepiusFill,
      light: AsclepiusLight,
      regular: AsclepiusRegular,
      thin: AsclepiusThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
