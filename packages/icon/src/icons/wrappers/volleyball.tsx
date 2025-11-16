import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VolleyballBold } from "../bold";
import { VolleyballDuotone } from "../duotone";
import { VolleyballFill } from "../fill";
import { VolleyballLight } from "../light";
import { VolleyballRegular } from "../regular";
import { VolleyballThin } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const Volleyball = memo(function Volleyball(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VolleyballBold,
      duotone: VolleyballDuotone,
      fill: VolleyballFill,
      light: VolleyballLight,
      regular: VolleyballRegular,
      thin: VolleyballThin,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
