import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { HurricaneBold } from "../bold";
import { HurricaneDuotone } from "../duotone";
import { HurricaneFill } from "../fill";
import { HurricaneLight } from "../light";
import { HurricaneRegular } from "../regular";
import { HurricaneThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Hurricane = memo(function Hurricane(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: HurricaneBold,
      duotone: HurricaneDuotone,
      fill: HurricaneFill,
      light: HurricaneLight,
      regular: HurricaneRegular,
      thin: HurricaneThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
