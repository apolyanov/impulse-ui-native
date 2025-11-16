import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { UmbrellaBold } from "../bold";
import { UmbrellaDuotone } from "../duotone";
import { UmbrellaFill } from "../fill";
import { UmbrellaLight } from "../light";
import { UmbrellaRegular } from "../regular";
import { UmbrellaThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Umbrella = memo(function Umbrella(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: UmbrellaBold,
      duotone: UmbrellaDuotone,
      fill: UmbrellaFill,
      light: UmbrellaLight,
      regular: UmbrellaRegular,
      thin: UmbrellaThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
