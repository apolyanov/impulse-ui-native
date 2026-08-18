import { ComponentType, memo, useMemo } from "react";
import { SvgProps } from "react-native-svg";

import { IconVariant, IconWrapperProps } from "../../types";
import { FootprintsBoldIcon } from "../bold/footprints-bold.icon";
import { FootprintsDuotoneIcon } from "../duotone/footprints-duotone.icon";
import { FootprintsFillIcon } from "../fill/footprints-fill.icon";
import { FootprintsLightIcon } from "../light/footprints-light.icon";
import { FootprintsRegularIcon } from "../regular/footprints-regular.icon";
import { FootprintsThinIcon } from "../thin/footprints-thin.icon";

export const FootprintsIcon = memo(function Footprints(
  props: IconWrapperProps,
) {
  const Icon = useMemo(() => {
    const icons: Record<IconVariant, ComponentType<SvgProps>> = {
      bold: FootprintsBoldIcon,
      duotone: FootprintsDuotoneIcon,
      fill: FootprintsFillIcon,
      light: FootprintsLightIcon,
      regular: FootprintsRegularIcon,
      thin: FootprintsThinIcon,
    };

    return icons[props.variant ?? "regular"];
  }, [props.variant]);

  return <Icon {...props} />;
});
