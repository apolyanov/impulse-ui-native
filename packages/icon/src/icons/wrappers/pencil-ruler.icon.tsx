import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { PencilRulerBoldIcon } from "../bold/pencil-ruler-bold.icon";
import { PencilRulerDuotoneIcon } from "../duotone/pencil-ruler-duotone.icon";
import { PencilRulerFillIcon } from "../fill/pencil-ruler-fill.icon";
import { PencilRulerLightIcon } from "../light/pencil-ruler-light.icon";
import { PencilRulerRegularIcon } from "../regular/pencil-ruler-regular.icon";
import { PencilRulerThinIcon } from "../thin/pencil-ruler-thin.icon";

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
