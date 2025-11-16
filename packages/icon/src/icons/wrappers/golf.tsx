import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { GolfBold } from "../bold";
import { GolfDuotone } from "../duotone";
import { GolfFill } from "../fill";
import { GolfLight } from "../light";
import { GolfRegular } from "../regular";
import { GolfThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Golf = memo(function Golf(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: GolfBold,
      duotone: GolfDuotone,
      fill: GolfFill,
      light: GolfLight,
      regular: GolfRegular,
      thin: GolfThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
