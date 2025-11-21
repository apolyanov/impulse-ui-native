import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { VolleyballBoldIcon } from "../bold";
import { VolleyballDuotoneIcon } from "../duotone";
import { VolleyballFillIcon } from "../fill";
import { VolleyballLightIcon } from "../light";
import { VolleyballRegularIcon } from "../regular";
import { VolleyballThinIcon } from "../thin";
import { IconVariant, IconWrapperProps } from "../../types";

export const VolleyballIcon = memo(function Volleyball(
  props: IconWrapperProps
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: VolleyballBoldIcon,
      duotone: VolleyballDuotoneIcon,
      fill: VolleyballFillIcon,
      light: VolleyballLightIcon,
      regular: VolleyballRegularIcon,
      thin: VolleyballThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
