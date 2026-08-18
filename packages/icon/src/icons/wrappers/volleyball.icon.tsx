import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { VolleyballBoldIcon } from "../bold/volleyball-bold.icon";
import { VolleyballDuotoneIcon } from "../duotone/volleyball-duotone.icon";
import { VolleyballFillIcon } from "../fill/volleyball-fill.icon";
import { VolleyballLightIcon } from "../light/volleyball-light.icon";
import { VolleyballRegularIcon } from "../regular/volleyball-regular.icon";
import { VolleyballThinIcon } from "../thin/volleyball-thin.icon";

export const VolleyballIcon = memo(function Volleyball(
  props: IconWrapperProps,
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
