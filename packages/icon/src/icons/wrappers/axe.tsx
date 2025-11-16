import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { AxeBold } from "../bold";
import { AxeDuotone } from "../duotone";
import { AxeFill } from "../fill";
import { AxeLight } from "../light";
import { AxeRegular } from "../regular";
import { AxeThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Axe = memo(function Axe(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: AxeBold,
      duotone: AxeDuotone,
      fill: AxeFill,
      light: AxeLight,
      regular: AxeRegular,
      thin: AxeThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
