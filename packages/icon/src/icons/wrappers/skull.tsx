import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { SkullBold } from "../bold";
import { SkullDuotone } from "../duotone";
import { SkullFill } from "../fill";
import { SkullLight } from "../light";
import { SkullRegular } from "../regular";
import { SkullThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Skull = memo(function Skull(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: SkullBold,
      duotone: SkullDuotone,
      fill: SkullFill,
      light: SkullLight,
      regular: SkullRegular,
      thin: SkullThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
