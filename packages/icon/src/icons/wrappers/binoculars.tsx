import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BinocularsBold } from "../bold";
import { BinocularsDuotone } from "../duotone";
import { BinocularsFill } from "../fill";
import { BinocularsLight } from "../light";
import { BinocularsRegular } from "../regular";
import { BinocularsThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Binoculars = memo(function Binoculars(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BinocularsBold,
      duotone: BinocularsDuotone,
      fill: BinocularsFill,
      light: BinocularsLight,
      regular: BinocularsRegular,
      thin: BinocularsThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
