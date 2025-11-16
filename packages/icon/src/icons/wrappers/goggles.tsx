import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GogglesBold } from "../bold";
import { GogglesDuotone } from "../duotone";
import { GogglesFill } from "../fill";
import { GogglesLight } from "../light";
import { GogglesRegular } from "../regular";
import { GogglesThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Goggles = memo(function Goggles(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GogglesBold,
      duotone: GogglesDuotone,
      fill: GogglesFill,
      light: GogglesLight,
      regular: GogglesRegular,
      thin: GogglesThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
