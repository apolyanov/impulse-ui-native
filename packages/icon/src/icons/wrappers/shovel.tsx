import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { ShovelBold } from "../bold";
import { ShovelDuotone } from "../duotone";
import { ShovelFill } from "../fill";
import { ShovelLight } from "../light";
import { ShovelRegular } from "../regular";
import { ShovelThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Shovel = memo(function Shovel(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: ShovelBold,
      duotone: ShovelDuotone,
      fill: ShovelFill,
      light: ShovelLight,
      regular: ShovelRegular,
      thin: ShovelThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
