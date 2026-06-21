import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PencilRulerBoldIcon } from "../bold";
import { PencilRulerDuotoneIcon } from "../duotone";
import { PencilRulerFillIcon } from "../fill";
import { PencilRulerLightIcon } from "../light";
import { PencilRulerRegularIcon } from "../regular";
import { PencilRulerThinIcon } from "../thin";

export const PencilRulerIcon = memo(function PencilRuler(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: PencilRulerBoldIcon,
      duotone: PencilRulerDuotoneIcon,
      fill: PencilRulerFillIcon,
      light: PencilRulerLightIcon,
      regular: PencilRulerRegularIcon,
      thin: PencilRulerThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
