import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { BoulesBold } from "../bold";
import { BoulesDuotone } from "../duotone";
import { BoulesFill } from "../fill";
import { BoulesLight } from "../light";
import { BoulesRegular } from "../regular";
import { BoulesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Boules = memo(function Boules(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: BoulesBold,
      duotone: BoulesDuotone,
      fill: BoulesFill,
      light: BoulesLight,
      regular: BoulesRegular,
      thin: BoulesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
