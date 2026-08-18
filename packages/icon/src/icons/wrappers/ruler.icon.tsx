import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { RulerBoldIcon } from "../bold/ruler-bold.icon";
import { RulerDuotoneIcon } from "../duotone/ruler-duotone.icon";
import { RulerFillIcon } from "../fill/ruler-fill.icon";
import { RulerLightIcon } from "../light/ruler-light.icon";
import { RulerRegularIcon } from "../regular/ruler-regular.icon";
import { RulerThinIcon } from "../thin/ruler-thin.icon";

export const RulerIcon = memo(function Ruler(props: IconWrapperProps) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: RulerBoldIcon,
      duotone: RulerDuotoneIcon,
      fill: RulerFillIcon,
      light: RulerLightIcon,
      regular: RulerRegularIcon,
      thin: RulerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
